import { Type } from '@/types/pokemon';
import toast from 'react-hot-toast';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
export type MyPokemon = {
  id: number;
  name: string;
  nickname: string;
  sprites: string;
  types: Type[];
};

interface PokemonStore {
  pokemons: MyPokemon[];
  addPokemon: (pokemon: MyPokemon) => void;
  removePokemon: (nickname: string) => void;
  updatePokemon: (newNickname: string, oldNickname: string) => void;
}

export const usePokemonStore = create<PokemonStore>()(
  devtools(
    persist((set) => ({
      pokemons: [],
      addPokemon(pokemon) {
        set((state) => ({
          pokemons: [...state.pokemons, pokemon],
        }));
      },
      removePokemon(nickname) {
        set((state) => ({
          pokemons: state.pokemons.filter(
            (pokemon) => pokemon.nickname !== nickname,
          ),
        }));
        toast.success('Pokemon released');
      },
      updatePokemon(newNickname, oldNickname) {
        set((state) => ({
          pokemons: state.pokemons.map((pokemon) =>
            pokemon.nickname === oldNickname
              ? { ...pokemon, nickname: newNickname }
              : pokemon,
          ),
        }));
      },
    })),
  ),
);
