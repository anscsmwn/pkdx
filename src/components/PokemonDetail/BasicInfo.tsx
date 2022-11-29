import { Pokemon } from '@/types/pokemon';
import { titleCase } from '@/utils/formatter';
import React from 'react';
import PokemonType from '../PokemonCard/PokemonType';
import PokemonMeasurement from './PokemonMeasurement';
interface BasicInfoProps {
  pokemon: Pokemon;
}
const BasicInfo = ({ pokemon }: BasicInfoProps) => {
  return (
    <div className="flex items-center flex-col z-50 relative top-5">
      <img
        width={200}
        height={200}
        className="mx-auto"
        src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
        alt="pokegif"
      />
      <h1 className="my-5 text-center text-white">{titleCase(pokemon.name)}</h1>
      <PokemonMeasurement pokemon={pokemon} />
      <PokemonType types={pokemon.types} />
    </div>
  );
};

export default BasicInfo;
