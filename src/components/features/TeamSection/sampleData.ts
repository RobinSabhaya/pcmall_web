import founderImage from '@/public/images/about/founder.png';
import managerDirectorImage from '@/public/images/about/managing_director.png';
import productDesignerImage from '@/public/images/about/product_designer.png';

import type { TeamMember } from './TeamSection.type';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Tom Cruise',
    position: 'Founder & Chairman',
    image: founderImage,
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/tomcruise' },
      { platform: 'instagram', url: 'https://instagram.com/tomcruise' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/tomcruise' },
    ],
  },
  {
    id: '2',
    name: 'Emma Watson',
    position: 'Managing Director',
    image: managerDirectorImage,
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/emmawatson' },
      { platform: 'instagram', url: 'https://instagram.com/emmawatson' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/emmawatson' },
    ],
  },
  {
    id: '3',
    name: 'Will Smith',
    position: 'Product Designer',
    image: productDesignerImage,
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/willsmith' },
      { platform: 'instagram', url: 'https://instagram.com/willsmith' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/willsmith' },
    ],
  },
  {
    id: '4',
    name: 'Jennifer Lawrence',
    position: 'Lead Developer',
    image: '/api/placeholder/300/400',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/jenniferlawrence' },
      { platform: 'instagram', url: 'https://instagram.com/jenniferlawrence' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/jenniferlawrence' },
    ],
  },
  // {
  //   id: '5',
  //   name: 'Ryan Reynolds',
  //   position: 'Marketing Director',
  //   image: '/api/placeholder/300/400',
  //   socialLinks: [
  //     { platform: 'twitter', url: 'https://twitter.com/ryanreynolds' },
  //     { platform: 'instagram', url: 'https://instagram.com/ryanreynolds' },
  //     { platform: 'linkedin', url: 'https://linkedin.com/in/ryanreynolds' },
  //   ],
  // },
  // {
  //   id: '6',
  //   name: 'Scarlett Johansson',
  //   position: 'Creative Director',
  //   image: '/api/placeholder/300/400',
  //   socialLinks: [
  //     { platform: 'twitter', url: 'https://twitter.com/scarlettjohansson' },
  //     { platform: 'instagram', url: 'https://instagram.com/scarlettjohansson' },
  //     {
  //       platform: 'linkedin',
  //       url: 'https://linkedin.com/in/scarlettjohansson',
  //     },
  //   ],
  // },
];
