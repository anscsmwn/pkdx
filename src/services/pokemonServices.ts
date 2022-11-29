import { BaseList, Pokemon } from '@/types/pokemon';
import httpCommon from '@/utils/http-common';
import axios from 'axios';

export const getPokemonList = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon',
}) => {
  return axios.get<BaseList>(pageParam);
};

export const getPokemon = async (name: string) => {
  return httpCommon.get<Pokemon>(`/pokemon/${name}`);
};
