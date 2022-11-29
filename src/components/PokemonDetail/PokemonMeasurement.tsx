import { Pokemon } from '@/types/pokemon';
import { GiWeightScale } from 'react-icons/gi';
import { FaRulerVertical } from 'react-icons/fa';
import { convertCmToLb, convertKgToFt } from '@/utils/formatter';

interface PokemonMeasurementProps {
  pokemon: Pokemon;
}

const PokemonMeasurement = ({ pokemon }: PokemonMeasurementProps) => {
  return (
    <div>
      <div className="mx-auto mb-2 flex w-fit items-center justify-between gap-3 rounded-2xl bg-white backdrop-blur-sm bg-opacity-10 p-5 text-white">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <GiWeightScale />
            <p className="font-semibold">
              {pokemon.weight / 10} kg ({convertCmToLb(pokemon.weight)})
            </p>
          </div>
          <p className="text-sm">Weight</p>
        </div>
        <div className="h-7 border-l-2 border-white"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <FaRulerVertical />
            <p className="font-semibold">
              {pokemon.height / 10} m ({convertKgToFt(pokemon.height)})
            </p>
          </div>
          <p className="text-sm">Height</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonMeasurement;
