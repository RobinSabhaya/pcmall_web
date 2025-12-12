import type { Metadata } from 'next';

import OurStory from '@/components/features/About/OurStory';
import PageWrapper from '@/components/ui/Common/PageWrapper';
import { statsData } from '@/components/ui/Stats/sampleData';

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

        <div className="my-4">
          <Stats stats={statsData} />
        </div>
        {/*
        <TeamSection
          members={sampleTeamMembers}
          title="Meet Our Amazing Team"
        /> */}
      </PageWrapper>
    </>
  );
}
