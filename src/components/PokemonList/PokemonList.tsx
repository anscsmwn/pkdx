import { useGetPokemonQueries } from '@/query-hook/usePokemon';
import { BaseName } from '~/../types/pokemon';
import PokemonType from '../PokemonCard/PokemonType';
import PokemonItem from './PokemonItem';

type Props = {
  pokemons: BaseName[];
};

const PokemonList = ({ pokemons }: Props) => {
  const pokemonNames = pokemons.map((pokemon) => pokemon.name);
  const results = useGetPokemonQueries(pokemonNames);

  return (
    <div className="grid grid-cols-2 gap-5 px-5 py-3">
      {results.map(({ data }) => (
        <>{data?.data && <PokemonItem pokemon={data.data} />}</>
      ))}
    </div>
  );
};

export default PokemonList;
