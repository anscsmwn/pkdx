import { borderColor, icon, textColor } from '@/theme';
import { Type } from '@/types/pokemon';
import { titleCase } from '@/utils/formatter';
import React from 'react';

type Props = {
  types: Type[];
  isShow?: boolean;
};

const PokemonType = ({ types, isShow }: Props) => {
  return (
    <div className="mt-2 mb-4 flex items-center gap-2">
      {types.map((type) => {
        const iconType = icon.type[type.type.name];
        return (
          <React.Fragment key={type.slot}>
            <div
              key={type.slot}
              className={`${borderColor.types[type.type.name]} ${
                textColor.types[type.type.name]
              } flex items-center gap-2 rounded-full border py-2 px-3 text-xs font-semibold`}
            >
              <p className={`${isShow ? 'block' : 'hidden sm:block'}`}>
                {titleCase(type.type.name)}
              </p>
              {<iconType.icon />}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PokemonType;
