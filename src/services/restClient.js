import axios from 'axios';

const respClient = axios.create({
  baseURL: 'http://179.191.226.2:81'
})

export default respClient;