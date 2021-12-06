import axios from 'axios';

const respClient = axios.create({
  baseURL: 'http://192.168.105:8080/'
})

export default respClient;