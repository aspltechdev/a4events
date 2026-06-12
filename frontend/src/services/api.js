import axios from 'axios';

const api = axios.create({
  baseURL: 'https://a4agroup.eu/api'
});

export default api;