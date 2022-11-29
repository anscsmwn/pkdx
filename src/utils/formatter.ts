export const titleCase = (str: string) => {
  return str
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Special', 'Sp.');
};

export const textLink = (str: string) => {
  return str.toLowerCase().split(' ').join('-');
};

export const formattedId = (id: number) => {
  return id.toString().padStart(3, '0');
};

export const formattedStatically = (str: string) => {
  return `https://cdn.statically.io/img/${str.replace('https://', '')}`;
};

export const convertKgToFt = (height: number) => {
  const ft = Math.floor(height / 3.048);
  const inch = Math.round((height / 3.048 - ft) * 12);
  return `${ft}' ${inch < 10 ? inch.toString().padStart(2, '0') : inch}"`;
};

export const convertCmToLb = (weight: number) => {
  return `${Math.round(weight / 4.536)} lb`;
};
