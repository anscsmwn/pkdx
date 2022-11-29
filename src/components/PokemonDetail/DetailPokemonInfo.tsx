import { Pokemon } from '@/types/pokemon';
import HeaderInfo from './HeaderInfo';
import BlurryGradientAnimate from './BlurryGradientAnimate';
import BasicInfo from './BasicInfo';
import Menu from './Menu';
import { useState } from 'react';
import Stats from './Stats';
import Moves from './Moves';
import Abilities from './Abilities';

type Props = {
  pokemon: Pokemon;
};
const DetailPokemonInfo = ({ pokemon }: Props) => {
  const [activeTab, setActiveTab] = useState('stats');
  return (
    <div>
      <HeaderInfo pokemon={pokemon} />
      <BlurryGradientAnimate types={pokemon.types} />
      <BasicInfo pokemon={pokemon} />
      <div className="detail-container">
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'stats' && <Stats pokemon={pokemon} />}
        {activeTab === 'moves' && <Moves pokemon={pokemon} />}
        {activeTab === 'abilities' && <Abilities pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default DetailPokemonInfo;
