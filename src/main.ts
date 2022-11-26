import axios from 'axios';

async function getBTCprice() {
  try {
    //musze podać typ zwracanego obiektu, nie wiem czym dokładnie jest ale wiem, że będę
    //chciał użyc tylko data.market_data.current_price.usd, gdy dam typ generyczny to nie będę się
    //w stanie odwołać.. mogę ręcznie ale obiekt jest ogromny i nie znam typów, zajęłoby kilka h! 
    const  res = await axios.get<any>('https://api.coingecko.com/api/v3/coins/bitcoin');
    let obj= res.data.market_data.current_price.usd; //NIE ZADZIAŁA!
    // console.log(`BTC price in USD: ${obj}`);
    console.log(res);
    return res;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.log('error message: ', error.message);
    //   return error.message;
    // } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    // }
  }
  // let res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
  // let obj= res.data.market_data.current_price.usd; 
  // console.log(`BTC price in USD: ${obj}`)

  // axios.request<User, string>({
  //   method: 'get',
  //   url: '/user?id=12345'
  // })
  //   .then((foo: string) => { // <-- you could leave out the type annotation here, it's inferred
  //     console.log(foo)
  //   })
}

getBTCprice();







// import axios from 'axios';

// async function doRequests(urls) {

//     const fetchUrl = (url) => axios.get(url);
//     const promises = urls.map(fetchUrl);

//     let responses = await Promise.all(promises);

//     responses.forEach(resp => {
//         let msg = `${resp.config.url} -> ${resp.headers.server}: ${resp.status}`;
//         console.log(msg);
//     });
// }

// let urls = [
//     'http://webcode.me',
//     'https://example.com',
//     'http://httpbin.org',
//     'https://clojure.org',
//     'https://fsharp.org',
//     'https://symfony.com',
//     'https://www.perl.org',
//     'https://www.php.net',
//     'https://www.python.org',
//     'https://code.visualstudio.com',
//     'https://github.com'
// ];

// doRequests(urls);