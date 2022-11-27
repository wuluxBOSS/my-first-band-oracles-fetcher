import axios from 'axios';

async function getBTCprice() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
      let obj= response.data.market_data.current_price.usd;
      console.log(obj);
    } catch (error) {
      console.error(error);
    }
}

getBTCprice();