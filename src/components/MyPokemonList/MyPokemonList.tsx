import { MyPokemon } from '@/store/pokemonStore';
import MyPokemonItem from './MyPokemonItem';

interface MyPokemonListProps {
  pokemons: MyPokemon[];
}
const MyPokemonList = ({ pokemons }: MyPokemonListProps) => {
  return (
    <div className="grid grid-cols-2 gap-5 px-5 py-3">
      {pokemons.map((pokemon) => (
        <MyPokemonItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default MyPokemonList;
