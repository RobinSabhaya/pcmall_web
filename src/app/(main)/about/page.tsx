import type { Metadata } from 'next';

import OurStory from '@/components/features/About/OurStory';
import { sampleTeamMembers } from '@/components/features/TeamSection';
import PageWrapper from '@/components/ui/Common/PageWrapper';
import { statsData } from '@/components/ui/Stats/sampleData';

import TeamSection from '../../../components/features/TeamSection/TeamSection';
import Stats from '../../../components/ui/Stats/Stats';

// SEO
export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <PageWrapper className="lg:mx-20">
        <OurStory />

        <Stats stats={statsData} />

        <TeamSection
          members={sampleTeamMembers}
          title="Meet Our Amazing Team"
        />
      </PageWrapper>
    </>
  );
}
