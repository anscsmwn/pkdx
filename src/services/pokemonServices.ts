import { BaseList, Pokemon } from '@/types/pokemon';
import httpCommon from '@/utils/http-common';

export const getPokemonList = async () => {
  return httpCommon.get<BaseList>('/pokemon');
};

export const getPokemon = async (name: string) => {
  return httpCommon.get<Pokemon>(`/pokemon/${name}`);
};
