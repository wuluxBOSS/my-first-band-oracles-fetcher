import axios from 'axios';

type Crypto = {
  symbol: string;
  price: number;
}

async function printCryptoPrices() {
  const BAND_ORACLE_API_URL=`https://laozi1.bandchain.org/api/oracle/v1/request_prices`;
  const symbols = ["BTC", "ETH", "AAVE", "UNI"];
  const requestCurriences = symbols.join("&symbols=");

  try {
    const response = await axios.get(`${BAND_ORACLE_API_URL}?symbols=${requestCurriences}`);
   
    const obj = response.data.price_results;
    const cryptocurriences: Crypto[]= [];
    
    obj.forEach((asset: { symbol: string; px: number; multiplier: number; })=>{
      const assetPrice: Crypto ={
        symbol: asset.symbol,
        price: asset.px/asset.multiplier,
      }
      cryptocurriences.push(assetPrice);
    });
      
    console.log(cryptocurriences);
  } catch (error) {
    console.error(error);
  }
}

printCryptoPrices();