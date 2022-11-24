const axios = require('axios');

async function getBTCprice() {

  let res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');

  let obj= res.data; //market_data.current_price -wszystkie waluty..
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

let myString = JSON.stringify(obj);
console.log(myString);
//  console.log(obj);


}

getBTCprice();