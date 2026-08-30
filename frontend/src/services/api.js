import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://a4agroup.eu/api'

   baseURL: 'http://localhost:5000/api'
});

export default api;