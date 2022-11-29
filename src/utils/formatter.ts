export const titleCase = (str: string) => {
  return str
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Special', 'Sp.');
};

export const formattedId = (id: number) => {
  return id.toString().padStart(3, '0');
};
