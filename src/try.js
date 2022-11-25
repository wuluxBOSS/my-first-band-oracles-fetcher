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




const axios = require('axios');

async function getBTCprice() {

  let res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
  let obj= res.data.market_data.current_price.usd; 
  console.log(`BTC price in USD: ${obj}`)
}

getBTCprice();



const axios = require('axios');

async function getBTCprice() {

  let res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');

  // const chunksParser = body => {
  //   return body
  //     .replace(/^(\w{1,3})\r\n/, "") // replace header chunks info 
  //     .replace(/\r\n(\w{1,3})\r\n/, "") // replace in-body chunks info
  //     .replace(/(\r\n0\r\n\r\n)$/, ""); // replace end chunks info
  // };
  
  // const getData = async () => {
  //   response = await await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
  //   const { data } = response;
  //   const body = chunksParser(data);
  //   const json = JSON.parse(body);
  //   return json;
  // };
  // console.log(getData());


  // function getData(res) {
  //   const transferEncoding = res.headers['transfer-encoding'];
  //   if (!transferEncoding || transferEncoding !== 'chunked, chunked') {
  //     return res.data;
  //   }

  //   const chunksParser = body => {
  //     return body
  //       .replace(/^(\w{1,3})\r\n/, "") // replace header chunks info 
  //       .replace(/\r\n(\w{1,3})\r\n/, "") // replace in-body chunks info
  //       .replace(/(\r\n0\r\n\r\n)$/, ""); // replace end chunks info
  //   };
  //   const { data } = response;
  //   const body = chunksParser(data);
  //   const json = JSON.parse(body);
  //   return json;
  //   // const splitString = res.data.split('\r\n');
  //   // return JSON.parse(splitString[1]);
  // }
  // const chunksParser = body => {
  //   return body
  //     .replace(/^(\w{1,3})\r\n/, "") // replace header chunks info 
  //     .replace(/\r\n(\w{1,3})\r\n/, "") // replace in-body chunks info
  //     .replace(/(\r\n0\r\n\r\n)$/, ""); // replace end chunks info
  // };
  // const { data } = res;
  // const body = chunksParser(res.data);
  // const json = JSON.parse(body);
  // console.log(json);
//   return json;
// let obj =getData(res);
// console.log(obj);
let obj= res.data; //market_data.current_price -wszystkie waluty..
// console.log(Object.keys(obj));
console.log(obj);


  // let op=JSON.parse(BTCprice)
  // console.log(op);

//  console.log(typeof{obj});
//  console.log(obj["market_data"]);
//  console.log(obj['market_data']);
//  console.log(obj["id"]);

// let txt = "";
// for (let x in obj) {
//   txt += obj[x] + " ";
// }
// console.log(txt);

// let myString = JSON.stringify(obj);
// console.log(myString);
//  console.log(obj);
// function getData(res) {
//   const transferEncoding = res.headers['transfer-encoding'];
//   if (!transferEncoding || transferEncoding !== 'chunked, chunked') {
//     return res.data;
//   }

//   const splitString = res.data.split('\r\n');
//   return JSON.parse(splitString[1]);
// }

// let obj =getData(res);

// console.log(Object.keys(obj));
// console.log(obj.data);
// console.log(obj['0']);
// console.log(obj["1"]);
// console.log(obj['1121']);

}

getBTCprice();