import {
  getPokemon,
  getPokemonAbility,
  getPokemonList,
} from '@/services/pokemonServices';
import httpCommon from '@/utils/http-common';
import { useQuery, useQueries, useInfiniteQuery } from 'react-query';

export const useGetPokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemonList,
    getNextPageParam: (lastPage) => lastPage.data.next,
  });
};

export const useGetPokemon = (name: string) => {
  return useQuery(['pokemon', name], () => getPokemon(name));
};

export const useGetPokemonQueries = (name: string[]) => {
  return useQueries(
    name.map((name) => ({
      queryKey: ['pokemon', name],
      queryFn: () => getPokemon(name),
    })),
  );
};

export const useGetPokemonAbility = (ability: string) => {
  const { data, isError, isLoading } = useQuery(
    ['ability', ability],
    () => getPokemonAbility(ability),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
  return { data, isError, isLoading };
};
