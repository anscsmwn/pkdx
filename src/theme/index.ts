import {
  GiFluffyWing,
  GiFizzingFlask,
  GiFallingRocks,
  GiElectric,
  GiFairy,
  GiAnvil,
  GiPsychicWaves,
  GiGroundbreaker,
  GiGoldShell,
} from 'react-icons/gi';
import {
  FaFire,
  FaWater,
  FaLeaf,
  FaBug,
  FaGhost,
  FaDragon,
  FaFistRaised,
  FaMoon,
  FaQuestion,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { Type } from '@/types/pokemon';

interface Color {
  types: {
    [key: string]: string;
  };
}

export const textColor: Color = {
  types: {
    normal: 'text-[#A8A878]',
    fire: 'text-[#F08030]',
    water: 'text-[#6890F0]',
    grass: 'text-[#78C850]',
    electric: 'text-[#F8D030]',
    ice: 'text-[#98D8D8]',
    fighting: 'text-[#C03028]',
    poison: 'text-[#A040A0]',
    ground: 'text-[#E0C068]',
    flying: 'text-[#A890F0]',
    psychic: 'text-[#F85888]',
    bug: 'text-[#A8B820]',
    rock: 'text-[#B8A038]',
    ghost: 'text-[#705898]',
    dark: 'text-[#705848]',
    dragon: 'text-[#7038F8]',
    steel: 'text-[#B8B8D8]',
    fairy: 'text-[#905F63]',
    unkown: 'text-[#6AA596]',
  },
};

export const borderColor: Color = {
  types: {
    normal: 'border-[#A8A878]/90',
    fire: 'border-[#F08030]/90',
    water: 'border-[#6890F0]/90',
    grass: 'border-[#78C850]/90',
    electric: 'border-[#F8D030]/90',
    ice: 'border-[#98D8D8]/90',
    fighting: 'border-[#C03028]/90',
    poison: 'border-[#A040A0]/90',
    ground: 'border-[#E0C068]/90',
    flying: 'border-[#A890F0]/90',
    psychic: 'border-[#F85888]/90',
    bug: 'border-[#A8B820]/90',
    rock: 'border-[#B8A038]/90',
    ghost: 'border-[#705898]/90',
    dark: 'border-[#705848]/90',
    dragon: 'border-[#7038F8]/90',
    steel: 'border-[#B8B8D0]/90',
    fairy: 'border-[#905F63]/90',
    unkown: 'border-[#6AA596]/90',
  },
};

export const bgColorOne: Color = {
  types: {
    normal: 'from-[#A8A878]/80',
    fire: 'from-[#F08030]/80',
    water: 'from-[#6890F0]/80',
    grass: 'from-[#78C850]/80',
    electric: 'from-[#F8D030]/80',
    ice: 'from-[#98D8D8]/80',
    fighting: 'from-[#C03028]/80',
    poison: 'from-[#A040A0]/80',
    ground: 'from-[#E0C068]/80',
    flying: 'from-[#A890F0]/80',
    psychic: 'from-[#F85888]/80',
    bug: 'from-[#A8B820]/80',
    rock: 'from-[#B8A038]/80',
    ghost: 'from-[#705898]/80',
    dark: 'from-[#705848]/80',
    dragon: 'from-[#7038F8]/80',
    steel: 'from-[#B8B8D0]/80',
    fairy: 'from-[#905F63]/80',
    unkown: 'from-[#6AA596]/80',
  },
};

export const bgColorTwo: Color = {
  types: {
    normal: 'to-[#A8A878]/80',
    fire: 'to-[#F08030]/80',
    water: 'to-[#6890F0]/80',
    grass: 'to-[#78C850]/80',
    electric: 'to-[#F8D030]/80',
    ice: 'to-[#98D8D8]/80',
    fighting: 'to-[#C03028]/80',
    poison: 'to-[#A040A0]/80',
    ground: 'to-[#E0C068]/80',
    flying: 'to-[#A890F0]/80',
    psychic: 'to-[#F85888]/80',
    bug: 'to-[#A8B820]/80',
    rock: 'to-[#B8A038]/80',
    ghost: 'to-[#705898]/80',
    dark: 'to-[#705848]/80',
    dragon: 'to-[#7038F8]/80',
    steel: 'to-[#B8B8D0]/80',
    fairy: 'to-[#905F63]/80',
    unkown: 'to-[#6AA596]/80',
  },
};

type Icon = {
  type: {
    [key: string]: {
      icon: IconType;
    };
  };
};

export const icon: Icon = {
  type: {
    normal: {
      icon: GiGoldShell,
    },
    fire: {
      icon: FaFire,
    },
    water: {
      icon: FaWater,
    },
    grass: {
      icon: FaLeaf,
    },
    electric: {
      icon: GiElectric,
    },
    ice: {
      icon: GiFluffyWing,
    },
    fighting: {
      icon: FaFistRaised,
    },
    poison: {
      icon: GiFizzingFlask,
    },
    ground: {
      icon: GiGroundbreaker,
    },
    flying: {
      icon: GiFluffyWing,
    },
    psychic: {
      icon: GiPsychicWaves,
    },
    bug: {
      icon: FaBug,
    },
    rock: {
      icon: GiFallingRocks,
    },
    ghost: {
      icon: FaGhost,
    },
    dark: {
      icon: FaMoon,
    },
    dragon: {
      icon: FaDragon,
    },
    steel: {
      icon: GiAnvil,
    },
    fairy: {
      icon: GiFairy,
    },
    unkown: {
      icon: FaQuestion,
    },
  },
};

export const getGradientBackground = (types: Type[]) => {
  const typeNames = types.map((type) => type.type.name);
  return `bg-gradient-to-r ${
    typeNames.length === 1
      ? `${bgColorOne.types[typeNames[0]]} ${bgColorTwo.types[typeNames[0]]}`
      : `${bgColorOne.types[typeNames[0]]} ${bgColorTwo.types[typeNames[1]]}`
  }`;
};
