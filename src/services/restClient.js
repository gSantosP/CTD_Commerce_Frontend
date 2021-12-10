import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://ctd-cemmerce-g3.herokuapp.com/'
})

export default respClient;