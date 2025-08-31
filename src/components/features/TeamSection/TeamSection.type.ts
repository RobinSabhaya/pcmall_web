import type { StaticImageData } from 'next/image';

export interface SocialLink {
  platform: 'twitter' | 'instagram' | 'linkedin';
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string | StaticImageData;
  socialLinks: SocialLink[];
}

export interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
  className?: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}
