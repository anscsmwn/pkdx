import { Pokemon } from '@/types/pokemon';
import { titleCase } from '@/utils/formatter';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ModalNickname from './ModalNickname';

interface CatchPokemonProps {
  pokemon: Pokemon;
}

const CatchPokemon = ({ pokemon }: CatchPokemonProps) => {
  const [isCatching, setIsCatching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const catchPromise = () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve('Success');
        } else {
          reject(new Error(`Pokemon Run`));
        }
      }, 1000);
    });
  };
  const handleCatch = () => {
    if (!isCatching) {
      setIsCatching(true);
      toast.promise(
        catchPromise()
          .then(() => {
            setIsModalOpen(true);
          })
          .finally(() => {
            setIsCatching(false);
          }),
        {
          loading: 'Throwing pokeball...',
          success: `Wooohoo... you catch ${titleCase(pokemon.name)}!`,
          error: `${titleCase(pokemon.name)} Run.`,
        },
      );
    }
  };
  return (
    <>
      <button
        onClick={() => {
          handleCatch();
        }}
        className="catch-pokemon group absolute top-7 right-0 flex items-center gap-2 rounded-l-full bg-white p-2 pl-4"
      >
        <p className="font-bold text-black">Catch!</p>
        <img
          className="w-7 group-hover:animate-spin"
          src="/pokeball.svg"
          alt="pokeball"
        />
      </button>
      <ModalNickname
        pokemon={pokemon}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default CatchPokemon;
