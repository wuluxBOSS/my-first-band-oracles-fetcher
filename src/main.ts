import axios from 'axios';

async function getBTCprice() {
    try {
      const response = await axios.get("https://laozi1.bandchain.org/api/oracle/v1/request_prices?symbols=BTC&symbols=ETH&symbols=AAVE&symbols=UNI");
      const obj = response.data.price_results;
      type Crypto = {
        symbol: string;
        price: number;
      }
      const Cryptocurriences: Crypto[]= [];
      obj.forEach((asset: { symbol: string; px: number; multiplier: number; })=>{
        const result: Crypto ={
          symbol: asset.symbol,
          price: asset.px/asset.multiplier,
        }
        Cryptocurriences.push(result);
      });
      
      console.log(Cryptocurriences);
    } catch (error) {
      console.error(error);
    }
}

getBTCprice();