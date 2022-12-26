const { getManufacturerModelAndYearFromTitle } = require("./manufacturers");

const getCarInfo = async (carinfo) => {
    let title = carinfo.match(/<h1[^>]*class="car-detail-header__title"[^>]*>(.*?)<\/h1>/)[0].split('>')[2].split('<')[0];
    const mfgData = getManufacturerModelAndYearFromTitle(title);
    let canUseMfg = false;
    if (mfgData !== "Unknown") {
        canUseMfg = true;
    }

    const taxRegex = /&pound;\d* p.a./;
    const headersRegex = /<div[^>]*class="technical-headers"[^>]*>(.*?)<\/div>/g;
    const headers = carinfo.match(headersRegex).map(e => e.split(">")[1].split("<")[0]).filter(e=>e!=='');


    const combinedRegex = /<div[^>]*class="technical-headers"[^>]*>(.*?)<\/div>|<div[^>]*class="technical-info"[^>]*>(.*?)<\/div>/g;;
    const combinedMatches = carinfo.match(combinedRegex).map(e => e.split('>')[1].split("<")[0]).filter(e=>e!=='');

    let filteredMatches = [];
    for (let i = 0; i < combinedMatches.length; i++) {
        let isheader = false;
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            if (combinedMatches[i] === header) {
                isheader = true;
                break;
            }


        }
        let nextIsHeader = false;
        if (isheader) {
            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                if (combinedMatches[i + 1] === header || combinedMatches[i+1]===undefined) {
                    //No data for header
                    nextIsHeader = true;
                    break;
                }


            }
        }
        if (!nextIsHeader) filteredMatches.push(combinedMatches[i])

    }

    let json = {};

    for (let i = 0; i < filteredMatches.length; i+=2) {
      
        const title = filteredMatches[i];
        const data = filteredMatches[i + 1];

        json[title] = data;
    }





    let tax = carinfo.match(taxRegex)
    if (tax)
    {

        tax= tax[0].split(";")[1].split(" ")[0];
    }
    else {
        tax="UNKNOWN";
    }
    json.Tax = tax;


    const techRegex = /<td[^>]*>([^<]*)<\/td>/g;



    let carStats = carinfo.match(techRegex).map(match => {
        const spl1 = match.split('\n');
        if (spl1[1] === undefined) return match;
        return spl1[1].replace('\t', '').replace('        ', '').replace('"', ' INCH');
    }).filter(match => match.indexOf('td') === -1)
        .filter(match => match.indexOf('Key Info') === -1)
        .filter(match => match.indexOf('Wheels and Tyres') === -1)
        .filter(match => match.indexOf('Warranty and Servicing') === -1)
        .filter(match => match !== 'Engine')
        .filter(match => match !== 'Safety')


    
    for (let i = 0; i < carStats.length; i += 2) {
        const title = carStats[i];
        const data = carStats[i + 1];

        json[title] = data;

    }

    if (canUseMfg) {
        json.Model = mfgData[1];
        json.Year = mfgData[2]
        json.Manufacturer = mfgData[0];
    }

    return json;

}

module.exports = {
    getCarInfo
}