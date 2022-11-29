import Layout from '@/components/Layout';
import PokemonList from '@/components/PokemonList/PokemonList';
import { useGetPokemonList } from '@/query-hook/usePokemon';
import React from 'react';

const Home = () => {
  const { data } = useGetPokemonList();
  return (
    <Layout title="Home">
      {data?.data && <PokemonList pokemons={data?.data.results} />}
    </Layout>
  );
};

export default Home;
