import axios from 'axios';

const COINGECKO = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export { COINGECKO };
