import type { NewArrivalItem } from './NewArrival.type';
const BASE_PATH = '/svg/new_arrival';

export const newArrivalData: NewArrivalItem[] = [
  {
    id: '1',
    title: 'PlayStation 5',
    subtitle: 'Black and White version of the PS5 coming out on sale.',
    image: `${BASE_PATH}/playstation.svg`,
    link: '/products/playstation-5',
    size: 'large',
    theme: 'dark',
  },
  {
    id: '2',
    title: "Women's Collections",
    subtitle: 'Featured woman collections that give you another vibe.',
    image: `${BASE_PATH}/woman_hat.svg`,
    link: '/collections/womens',
    size: 'medium',
    theme: 'dark',
  },
  {
    id: '3',
    title: 'Speakers',
    subtitle: 'Amazon wireless speakers',
    image: `${BASE_PATH}/speaker.svg`,
    link: '/products/speakers',
    size: 'small',
    theme: 'dark',
  },
  {
    id: '4',
    title: 'Perfume',
    subtitle: 'GUCCI INTENSE OUD EDP',
    image: `${BASE_PATH}/perfume.svg`,
    link: '/products/perfume',
    size: 'small',
    theme: 'dark',
  },
];
