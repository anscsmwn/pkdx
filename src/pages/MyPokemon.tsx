import Layout from '@/components/Layout';
import EmptyState from '@/components/MyPokemonList/EmptyState';
import MyPokemonList from '@/components/MyPokemonList/MyPokemonList';
import { usePokemonStore } from '@/store/pokemonStore';

const MyPokemon = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);

  return (
    <Layout title="My Pokemon">
      {pokemons.length === 0 ? (
        <EmptyState />
      ) : (
        <MyPokemonList pokemons={pokemons} />
      )}
    </Layout>
  );
};

export default MyPokemon;
