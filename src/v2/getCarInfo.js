const { getManufacturerModelAndYearFromTitle } = require("./manufacturers");

const getCarInfo = async (carinfo) => {
    let title = carinfo.match(/<h1[^>]*class="car-detail-header__title"[^>]*>(.*?)<\/h1>/)[0].split('>')[2].split('<')[0];
    const mfgData = getManufacturerModelAndYearFromTitle(title);
    let canUseMfg = false;
    if(mfgData !== "Unknown"){
            canUseMfg=true;
    }

    const regex = /<td[^>]*>([^<]*)<\/td>/g;


        
    let carStats = carinfo.match(regex).map(match=>{
        const spl1 = match.split('\n');
        if(spl1[1] === undefined) return match;
        return spl1[1].replace('\t', '').replace('        ', '').replace('"',' INCH');
    }).filter(match=>match.indexOf('td')===-1)
    .filter(match=>match.indexOf('Key Info') === -1)
    .filter(match=>match.indexOf('Wheels and Tyres') === -1)
    .filter(match=>match.indexOf('Warranty and Servicing') === -1)
    .filter(match=>match!=='Engine')
    .filter(match=>match!=='Safety')


    let json = {};
    for (let i = 0; i < carStats.length; i+=2) {
        const title = carStats[i];
        const data = carStats[i+1];

        json[title] = data;
        
    }

    if(canUseMfg){
        json.Model = mfgData[1];
        json.Year = mfgData[2]
        json.Manufacturer = mfgData[0];
    }
    
    return json;
   
}

module.exports = {
    getCarInfo
}