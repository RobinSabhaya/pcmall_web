const categoryIconList = [
  'camera',
  'cart',
  'cellPhone',
  'computer',
  'gamepad',
  'headphone',
  'smartWatch',
];

export const getCategoryIcon = (currentPos: number): string => {
  if (currentPos > categoryIconList.length - 1) {
    currentPos = Math.floor(Math.random() * categoryIconList.length);
  }

  const iconPath = `/svg/icons/${categoryIconList[currentPos]}.svg`;
  return iconPath;
};
