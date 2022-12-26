const puppeteer = require('puppeteer')
const { generateSearchParams } = require('./generateSearchParams');
const { getUrlsFromPage } = require('./generateUrls');
const { getCarInfo } = require('./getCarInfo');
const { getNumberOfResults } = require('./getNumberOfResults');
const cliProgress = require('cli-progress')
const fs = require('fs');
const { jsonToCSV } = require('./jsonToCSV');
const Bluebird = require('bluebird');

const BASE_URL = 'https://usedcarsni.com'
const CONCURRENCY = 250;

const main = async () => {
    console.log("Starting Browser & getting totals")
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const searchString = generateSearchParams();
    const numResults = await getNumberOfResults(page, searchString, BASE_URL)
    console.log("Closing Browser")
    browser.close();

    const pages = Math.ceil(numResults / 20);
    console.log(`${numResults} cars to get (${pages} pages)\nPulling URLs`);
    let carURLS = [];


    let bar = new cliProgress.SingleBar({etaBuffer:Math.floor((pages/100)*5)}, cliProgress.Presets.shades_classic);
    bar.start(pages, 0);
    let barValue = 0;

    const pageIndexes = Array.from({ length: pages }, (_, index) => index);

    carURLS = await Bluebird.map(pageIndexes, async (pageIndex, i) => {


        const url = BASE_URL + `/search_results.php?` + searchString + `&pagepc0=${pageIndex}`
        const resultPage = await fetch(url);
        if (resultPage.status === 200) {
            const data = await resultPage.text();

            barValue = pages - i; bar.update(barValue)
            return getUrlsFromPage(BASE_URL, data);
        }
        barValue = pages - i; bar.update(barValue)
        return undefined
    }, { concurrency: CONCURRENCY });
    carURLS = [... new Set(carURLS.flat())];

 

    bar.update(pages);
    bar.stop();
    console.log(`Writing URLs to file. \nURL quantity ${carURLS.length == numResults ? "match" : `mismatch - ${carURLS.length} to ${numResults}`}\nPulling data from each page...`)
    fs.writeFileSync('urls.json', JSON.stringify(carURLS))

    bar = new cliProgress.SingleBar({etaBuffer:Math.floor(carURLS.length/100)*5}, cliProgress.Presets.shades_classic);
    bar.start(carURLS.length, 0);
    barValue = 0;
    let allData = [];
    allData = await Bluebird.map(carURLS, async (url, i) => {


        try {

            const resultPage = await fetch(url);
            if (resultPage.status === 200) {
                const data = await resultPage.text();

                const info = await getCarInfo(data);
                info.Link = url;
                barValue = carURLS.length - i; bar.update(barValue)
                return info;
            }
            barValue = carURLS.length - i; bar.update(barValue)
            return undefined;
        }
        catch (err) {
            barValue = carURLS.length - i; bar.update(barValue)
            throw err;
            return undefined;
        }


    }, { concurrency: CONCURRENCY });
    bar.update(carURLS.length);

    bar.stop();

    allData = allData.filter(data => data !== undefined);

    console.log(`Successfully got ${allData.length} out of ${carURLS.length} cars`);

    const csv = jsonToCSV(allData);
    fs.writeFileSync('v2.csv', csv);
    fs.writeFileSync('v2.json', JSON.stringify(allData));

}


main();