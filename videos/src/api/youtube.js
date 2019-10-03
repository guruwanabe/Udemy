import axios from 'axios';

const API_KEY = 'AIzaSyDIDhsWQkxOAyLuPWHWjEBRxcYZ1_f3PJg';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: ROOT_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
