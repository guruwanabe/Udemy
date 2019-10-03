import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export default axios.create({
  baseURL: ROOT_URL
})
