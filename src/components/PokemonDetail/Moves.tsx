import { HiOutlineExternalLink } from 'react-icons/hi';
import { Pokemon } from '~/../types/pokemon';
import { textLink, titleCase } from '@/utils/formatter';
interface MovesProps {
  pokemon: Pokemon;
}
const Moves = ({ pokemon }: MovesProps) => {
  return (
    <section>
      <p className="my-1 text-xs">
        <span className="font-semibold">Tip: </span>
        You can click on the move to see the description.
      </p>
      <div className="mt-2 max-h-52 overflow-auto">
        {pokemon.moves.map(({ move }) => (
          <a
            href={`https://pokemondb.net/move/${textLink(move.name)}`}
            className="scrollbar-hide my-2 flex items-center justify-between rounded-md border-2 border-dashed border-neutral-300 px-5 py-4 text-lg transition-all hover:bg-neutral-800"
            target={'_blank'}
            key={move.name}
          >
            <p>{titleCase(move.name)}</p>
            <HiOutlineExternalLink />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Moves;
