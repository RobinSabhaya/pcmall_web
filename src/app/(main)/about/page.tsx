'use client';

import OurStory from '@/components/features/About/OurStory';
import {
  sampleTeamMembers,
  TeamSection,
} from '@/components/features/TeamSection';
import PageWrapper from '@/components/ui/Common/PageWrapper';
import Stats from '@/components/ui/Stats';
import { statsData } from '@/components/ui/Stats/sampleData';

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
