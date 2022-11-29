import { MyPokemon, usePokemonStore } from '@/store/pokemonStore';
import { getGradientBackground } from '@/theme';
import { formattedId, formattedStatically, titleCase } from '@/utils/formatter';
import { useState } from 'react';
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import { GiOpenChest } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import PokemonType from '../PokemonCard/PokemonType';
import ModalNickname from '../PokemonDetail/ModalNickname';

type Props = {
  pokemon: MyPokemon;
};

const MyPokemonItem = ({ pokemon }: Props) => {
  const { removePokemon, pokemons } = usePokemonStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const owned = pokemons.filter((p) => p.name === pokemon.name).length;

  return (
    <>
      <article className="relative transition duration-300 ease-in-out hover:scale-105 group">
        <div
          className={`${getGradientBackground(
            pokemon.types,
          )} rounded-lg absolute blur-sm -inset-0.5 group-hover:opacity-100 duration-200 opacity-60 animate-tilt`}
        ></div>
        <div
          className={`relative rounded-lg bg-dark-jungle-green/90 text-slate-200`}
        >
          <div className="absolute top-1 flex w-full items-center justify-between px-2 text-lg text-white">
            <button
              className="rounded-full p-3 transition-all hover:bg-neutral-600"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <FaPencilAlt />
            </button>
            <button
              className="rounded-full p-3 transition-all hover:bg-neutral-600"
              onClick={() => {
                removePokemon(pokemon.nickname);
              }}
            >
              <FaRegTrashAlt className="text-red-500" />
            </button>
          </div>
          <Link
            to={`/pokemon/${pokemon.name}`}
            key={pokemon.id}
            className={`flex w-full flex-col items-center px-4`}
          >
            <img
              width={100}
              height={100}
              src={formattedStatically(pokemon.sprites)}
              alt="pokemon"
            />
            <p className="text-xs text-gray-300">#{formattedId(pokemon.id)}</p>
            <p className="font-semibold">{pokemon.nickname}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <GiOpenChest />
              <p>
                {owned} {titleCase(pokemon.name)}
              </p>
            </div>
            <PokemonType types={pokemon.types} />
          </Link>
        </div>
      </article>
      <ModalNickname
        editPokemon={pokemon}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEdit
      />
    </>
  );
};

export default MyPokemonItem;
