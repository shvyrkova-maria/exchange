import axios from 'axios';

axios.defaults.baseURL = 'https://api.privatbank.ua/p24api';

export async function fetchExchage(date) {
  const response = await axios.get(`/exchange_rates?json&date=${date}`);

  console.log(response);
  // return response;
}
