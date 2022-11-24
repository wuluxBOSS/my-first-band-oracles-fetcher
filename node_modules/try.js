const axios = require('axios');

async function doRequests(urls) {

    const fetchUrl = (url) => axios.get(url);
    const promises = urls.map(fetchUrl);

    let responses = await Promise.all(promises);

    responses.forEach(resp => {
        let msg = `${resp.config.url} -> ${resp.headers.server}: ${resp.data}`;
        console.log(msg);
    });
}

let urls = [
    'http://webcode.me',
//    'https://api.coingecko.com/api/v3/coins/bitcoin',
    'https://github.com'
];

doRequests(urls);