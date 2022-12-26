const getNumberOfResults = async (page, searchStr, baseURL) => {
    await page.goto(`${baseURL}/search_results.php?${searchStr}`);
    await page.waitForSelector(".page-control-label");
    const resultCount = await page.evaluate(() => {
        const data = document
            .querySelector(".page-control-label")
            .textContent.trim()
            .split(" ");
        return data[data.length - 1];
    });
    return resultCount;
}

module.exports = {
    getNumberOfResults
}