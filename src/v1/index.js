const puppeteer = require("puppeteer");
const searchParams = require("../../search.json");
const { getManufacturerModelAndYearFromTitle } = require("./manufacturers");
const fs = require("fs/promises");
const cliProgress = require("cli-progress");
const { checkBlacklist } = require("./infoBlacklist");
const bluebird = require("bluebird");

const ROOT_URL = "https://www.usedcarsni.com";
const URLS_PER_PAGE = 20;
const CONCURRENCY = 15;
const HEADLESS = true;

let errors = [];

const main = async () => {
  console.log("Starting browser");
  //Start browser
  const browser = await puppeteer.launch({ headless: HEADLESS });
  const page = await browser.newPage();

  //Generate search string
  const searchStr = JSON.stringify(searchParams)
    .replaceAll(":", "=")
    .replaceAll('"', "")
    .replaceAll(",", "&")
    .replaceAll(" ", "")
    .replaceAll("{", "")
    .replaceAll("}", "");

  console.log("Getting total cars and pages to scrape");
  const totalCars = await getNumberOfResults(page, searchStr);
  const totalPages = getPagesFromResultsCount(totalCars);

  console.log(
    `${totalCars} cars found, need to scrape ${totalPages} pages of search results\nScraping...`
  );

  const urls = await scrapeAllPagesParallel(browser, totalPages, searchStr);

  console.log(`\nScraping individual pages...`);

  const info = await getAllCarInfoParallel(browser, urls);

  errors.forEach((error) => console.log(error));
  console.log("Writing results to file...");
  await fs.writeFile("results.json", JSON.stringify(info));
  jsonToCSV(info);
  console.log("Done!");

  await browser.close();
};

const getCarInfo = async (page, url) => {
  let car = { url };
  await page.goto(url);
  await page.waitForSelector(".technical-params");
  const carDatas = await page.evaluate(() => {
    let data = document.querySelectorAll('.row[role="listitem"]');
    let returnData = [];

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.classList.length === 1) {
        let field = "";
        let data = "";
        try {
          field = element.children[0].textContent;
        } catch (err) {
          errors.push(err);
          field = "Unknown";
        }
        try {
          data = element.children[1].textContent;
        } catch (err) {
          data = "Unknown";
          errors.push(err);
        }
        returnData.push({
          field,
          data,
        });
      }
    }
    return returnData;
  });

  const listingName = await page.evaluate(() => {
    const titleEl = document.querySelector(".car-detail-header__title");
    let title = "Unknown";
    try {
      title = titleEl.children[0].textContent.replace("  ", " ");
    } catch {}

    return title;
  });
  const price = await page.evaluate(() => {
    const priceEl = document.querySelector(".car-detail-price__price");
    let price = "Unknown";
    try {
      price = priceEl.textContent;
    } catch {}

    return price;
  });

  for (let i = 0; i < carDatas.length; i++) {
    if (checkBlacklist(carDatas[i].field))
      car[carDatas[i].field.replace(" ", "_").trim().toLowerCase()] =
        capitaliseCase(carDatas[i].data.trim());
  }

  try {
    car.standard_tax = car.standard_tax.split(" ")[0];
  } catch (err) {
    logError(`Tax data unavailable for ${listingName}`);
  }
  try {
    car.insurance = car.insurance.split("\n")[0];
  } catch (err) {
    logError(`Invalid insurance data for ${listingName} [i1]`);
  }
  try {
    car.insurance_security = car.insurance.substring(car.insurance.length - 1);
  } catch (err) {
    logError(`Invalid insurance data for ${listingName} [s]`);
  }
  try {
    car.insurance = car.insurance.substring(0, car.insurance.length - 1);
  } catch (err) {
    logError(`Invalid insurance data for ${listingName} [i2]`);
  }

  car.listingName = listingName;
  car.price = price;
  const carManufacturerAndModel =
    getManufacturerModelAndYearFromTitle(listingName);

  car.manufacturer = carManufacturerAndModel[0];
  car.model = carManufacturerAndModel[1];
  car.year = carManufacturerAndModel[2];

  return car;
};

const getAllCarInfoParallel = async (browser, urls) => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(urls.length, 0);
  let barValue = 0;
  return bluebird
    .map(
      urls,
      async (url, i, totalUrls) => {
        const page = await browser.newPage();
        let data = { make: "nav timeout" };
        try {
          const unordered = await getCarInfo(page, url);
          data = Object.keys(unordered)
            .sort()
            .reduce((obj, key) => {
              obj[key] = unordered[key];
              return obj;
            }, {});
        } catch {}
        barValue++;
        bar.update(barValue);
        page.close();
        return data;
      },
      { concurrency: CONCURRENCY }
    )
    .then((data) => {
      bar.update(urls.length);
      bar.stop();

      return data;
    });
};

const scrapeAllPagesParallel = async (browser, totalPages, searchStr) => {
  let pageIndexes = [];
  for (let i = 1; i <= totalPages; i++) {
    pageIndexes.push(i);
  }

  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(totalPages, 0);
  let barValue = 0;

  const urlsList = await bluebird
    .map(
      pageIndexes,
      async (pageIndex, i) => {
        let urls = [];
        const page = await browser.newPage();
        const newUrls = await getSearchResults(page, pageIndex, searchStr);
        newUrls.forEach((newUrl) => urls.push(newUrl.split("?make")[0]));

        barValue++;
        bar.update(barValue);

        page.close();
        return urls;
      },
      { concurrency: CONCURRENCY }
    )
    .then((data) => {
      bar.update(totalPages);
      bar.stop();
      return data;
    });
  let returnData = [];
  for (let i = 0; i < urlsList.length; i++) {
    for (let j = 0; j < urlsList[i].length; j++) {
      returnData.push(urlsList[i][j]);
    }
  }
  return returnData;
};

const getSearchResults = async (page, pageNo, searchStr) => {
  searchStr += `&pagepc0=${pageNo}`;
  await page.goto(`${ROOT_URL}/search_results.php?${searchStr}`);
  await checkConsent(page);
  let urls = await page.evaluate(() => {
    let returnData = [];
    let data = document.querySelectorAll(".car-line");
    data.forEach((e) => {
      returnData.push(e.querySelector("a").href);
    });
    return returnData;
  });
  return urls;
};

const getNumberOfResults = async (page, searchStr) => {
  await page.goto(`${ROOT_URL}/search_results.php?${searchStr}`);
  await page.waitForSelector(".page-control-label");
  const resultCount = await page.evaluate(() => {
    const data = document
      .querySelector(".page-control-label")
      .textContent.trim()
      .split(" ");
    return data[data.length - 1];
  });
  return resultCount;
};

const capitaliseCase = (word) => {
  text = word
    .toLowerCase()
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
  return text;
};

const logError = (msg) => errors.push(msg);

const jsonToCSV = (json) => {
  const replacer = (key, value) => (value === null ? "" : value);
  const header = Object.keys(json[0]);
  const csv = [
    header.join(","), // header row first
    ...json.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    ),
  ].join("\r\n");
  fs.writeFile("results.csv", csv);
};

const getPagesFromResultsCount = (resultsCount) =>
  Math.ceil(resultsCount / URLS_PER_PAGE);

const checkConsent = async page => {
    //Consent
    // const button = await page.$('aria/Consent[role="button"]');
    // if(button){

    //   await button.click();
    // }
}

main();

