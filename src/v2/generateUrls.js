const getUrlsFromPage = (baseURL, pageContent) => {
    const regex = /"([^"]*&search_type=1[^"]*)"/g;

    let matches = pageContent.match(regex);
    matches = [...new Set(matches)];
    let urls = matches.map(match => baseURL + match.replace('"', '')).filter(url => url.indexOf(".php") === -1);
    urls = urls.map(url=> url.split('?')[0])
    return urls;
}

module.exports = {
    getUrlsFromPage
}