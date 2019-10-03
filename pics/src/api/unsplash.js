import axios from 'axios';

export const API_KEY = '717b57f84feb59495b219b25964907db50f4a94706dd0c0d2c8a559c3999a1c5';
//export const SECRET = '330bce6cdbf478789452b158e04a3779b6da5ceb9eefb3cced0a56de985f4cdb';
export const ROOT_URL = 'https://api.unsplash.com/';

export default axios.create({
  baseURL: ROOT_URL,
  headers: { Authorization: `Client-ID ${API_KEY}` }
});
