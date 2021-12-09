import axios from 'axios';

const respClient = axios.create({
  baseURL: 'http://ctdcommerceg3-env.eba-mnsdd3hp.us-east-1.elasticbeanstalk.com/'
})

export default respClient;