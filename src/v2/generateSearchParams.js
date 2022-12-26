const searchParams = require("../../search.json");

const generateSearchParams = () => {
    return JSON.stringify(searchParams)
    .replaceAll(":", "=")
    .replaceAll('"', "")
    .replaceAll(",", "&")
    .replaceAll(" ", "")
    .replaceAll("{", "")
    .replaceAll("}", ""); 
}

module.exports = {
    generateSearchParams
}