import axios from 'axios';

// Let's change the name of this function as it fetches more than just BTC price now ;)
async function getBTCprice() {
    try {
      // I would move `https://laozi1.bandchain.org/api/oracle/v1/request_prices` to a constant (e.g. `BAND_ORACLE_API_URL`)
      // And would move requested symbols to a separate variable (smth like. `const symbols = ["BTC", "ETH", "AAVE", "UNI"]`)
      // Then, I would build the final URL dynamically, or would use an additional argument in `axios.get` method (`{params: {symbols}}`)
      const response = await axios.get("https://laozi1.bandchain.org/api/oracle/v1/request_prices?symbols=BTC&symbols=ETH&symbols=AAVE&symbols=UNI");
      const obj = response.data.price_results;
       
      // Types are usually declared in the beginning of the file, under the imports
      type Crypto = {
        symbol: string;
        price: number;
      }
        
      // Variables and consts should start with lower case letter according to the common JS code style
      const Cryptocurriences: Crypto[]= [];
      obj.forEach((asset: { symbol: string; px: number; multiplier: number; })=>{
        
        // `result` is never a good name for a variable ;) Let's change it to smth like `priceObj`
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
