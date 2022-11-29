import axios from 'axios';

const httpCommon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default httpCommon;
