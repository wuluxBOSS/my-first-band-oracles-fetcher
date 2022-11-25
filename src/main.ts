const axios = import('axios');

async function getBTCprice() {

  let res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
  let obj= res.data.market_data.current_price.usd; 
  console.log(`BTC price in USD: ${obj}`)
}

getBTCprice();