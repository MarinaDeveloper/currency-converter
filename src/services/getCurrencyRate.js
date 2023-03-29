import axios from "axios";

const getCurrencyRate = () => {
  const options = {
    method: 'GET',
    url: 'https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR%2CGBP%2CPLN&base=UAH',
    redirect: 'follow',
    headers: {"apikey": "wVR6plerlEgpwyT1rm9kKPYLJqM34I6H"}
  };
  
  return axios.request(options);
}

export default getCurrencyRate;