import { getGradientBackground } from '@/theme';
import { Pokemon } from '@/types/pokemon';
import { formattedId, formattedStatically, titleCase } from '@/utils/formatter';
import { Link } from 'react-router-dom';
import PokemonType from '../PokemonCard/PokemonType';

type Props = {
  pokemon: Pokemon;
};

const PokemonItem = ({ pokemon }: Props) => {
  return (
    <article className="relative transition duration-300 ease-in-out hover:scale-105 group">
      <div
        className={`${getGradientBackground(
          pokemon.types,
        )} rounded-lg absolute blur-sm -inset-0.5 group-hover:opacity-100 duration-200 opacity-60 animate-tilt`}
      ></div>
      <div
        className={`relative rounded-lg bg-dark-jungle-green/90 text-slate-200`}
      >
        <Link
          to={`/pokemon/${pokemon.name}`}
          key={pokemon.id}
          className={`flex w-full flex-col items-center px-4`}
        >
          <img
            width={100}
            height={100}
            src={formattedStatically(pokemon.sprites.front_default)}
            alt="pokemon"
          />
          <p className="text-xs text-gray-300">#{formattedId(pokemon.id)}</p>
          <p className="font-semibold">{titleCase(pokemon.name)}</p>
          <PokemonType types={pokemon.types} />
        </Link>
      </div>
    </article>
  );
};

export default PokemonItem;
