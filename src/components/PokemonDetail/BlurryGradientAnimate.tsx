import { getBluryBackground } from '@/theme';
import React from 'react';
import { Type } from '~/../types/pokemon';

interface BlurryGradientProps {
  types: Type[];
}
const BlurryGradientAnimate = ({ types }: BlurryGradientProps) => {
  const colors = getBluryBackground(types);
  return (
    <div className="absolute z-10 mx-auto -top-1 inset-x-0">
      {colors.map((color, idx) => (
        <div
          key={idx}
          className={`${
            idx === 0
              ? 'animation-delay-200 top-28 left-8'
              : 'animation-delay-4000 right-10'
          } relative mx-auto h-48 w-48 animate-blob rounded-full ${color} bg-opacity-70 mix-blend-multiply blur-3xl filter`}
        ></div>
      ))}
    </div>
  );
};

export default BlurryGradientAnimate;
