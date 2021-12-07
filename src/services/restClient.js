import axios from 'axios';

const respClient = axios.create({
  baseURL: 'http://localhost:8080'
})

export default respClient;