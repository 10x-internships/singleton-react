import axios from 'axios';

export const singletonAPI = axios.create({ baseURL: 'https://singleton-api.herokuapp.com/' });
