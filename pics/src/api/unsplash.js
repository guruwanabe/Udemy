import axios from 'axios';

export const API_KEY = '717b57f84feb59495b219b25964907db50f4a94706dd0c0d2c8a559c3999a1c5';
export const ROOT_URL = 'https://api.unsplash.com/';

export default axios.create({
  baseURL: ROOT_URL,
  headers: { Authorization: `Client-ID ${API_KEY}` }
});
