export const getGridClasses = (size: string) => {
  switch (size) {
    case 'large':
      return 'col-span-2 row-span-2';
    case 'medium':
      return 'col-span-1 row-span-1';
    default:
      return 'col-span-1 row-span-1';
  }
};

export const getTextColor = (theme: string) =>
  theme === 'dark' ? 'text-white' : 'text-gray-900';
