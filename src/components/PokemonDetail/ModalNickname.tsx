import { MyPokemon, usePokemonStore } from '@/store/pokemonStore';
import React from 'react';
import toast from 'react-hot-toast';
import { Pokemon } from '~/../types/pokemon';
interface ModalNicknameProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  pokemon?: Pokemon;
  isEdit?: boolean;
  editPokemon?: MyPokemon;
}
const ModalNickname = ({
  isModalOpen,
  setIsModalOpen,
  pokemon,
  editPokemon,
  isEdit = false,
}: ModalNicknameProps) => {
  const { addPokemon, pokemons, updatePokemon } = usePokemonStore();
  const [nickName, setNickName] = React.useState<string>(
    editPokemon?.nickname || '',
  );
  const [isError, setIsError] = React.useState(false);
  const [isDuplicate, setIsDuplicate] = React.useState(false);
  const handleSave = () => {
    const duplicate = pokemons.find((pokemon) => pokemon.nickname === nickName);
    if (nickName.length === 0) {
      setIsError(true);
      return;
    }
    if (duplicate) {
      setIsDuplicate(true);
      return;
    }
    if (!isEdit) {
      if (pokemon)
        addPokemon({
          id: pokemon.id,
          name: pokemon.name,
          nickname: nickName,
          sprites: pokemon.sprites.front_default || '',
          types: pokemon.types,
        });
      toast.success(`Wooohoo... you catch ${nickName}!`);
    } else {
      if (editPokemon) {
        if (nickName !== editPokemon.nickname) {
          updatePokemon(nickName, editPokemon.nickname);
          toast.success(
            `Success update nickname ${editPokemon.nickname} to ${nickName}`,
          );
        }
      }
    }
    setIsModalOpen(false);
    setIsError(false);
    setIsDuplicate(false);
    setNickName('');
  };
  return (
    <div
      className={` fixed inset-0 z-[80] flex items-center justify-center bg-black/25 text-[#c7c4c5] ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="mx-5 w-full max-w-sm rounded-md bg-[#121212] p-5 text-lg outline-dashed outline-[#4f4d4e] transition-all">
        <label
          className="text-[#c7c4c5] inline-block mb-2 text-sm"
          htmlFor="nickname"
        >
          {`Give your ${pokemon?.name} a nickname`}
        </label>
        <input
          name="nickname"
          value={nickName}
          type="text"
          className="h-10 w-full rounded-md bg-[#2d2b2c] px-4 py-7 "
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
        {isError && (
          <p className="mt-1 text-sm text-red-400">Nickname can't be empty</p>
        )}
        {isDuplicate && (
          <p className="mt-1 text-sm text-red-400">Nickname already exist</p>
        )}
        <div className="mt-5 flex justify-end gap-3 text-base text-white">
          <button
            onClick={() => {
              handleSave();
            }}
            className="rounded-full border border-green-500 p-3 py-2 text-green-500 hover:bg-green-200/10"
          >
            Save
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
              setIsError(false);
              setIsDuplicate(false);
              setNickName('');
            }}
            className="rounded-full border border-red-500 p-3 py-2 text-red-500 hover:bg-red-200/10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNickname;
