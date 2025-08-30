import OurStory from '@/components/features/About/OurStory'
import { sampleTeamMembers, TeamSection } from '@/components/features/TeamSection'
import Stats from '@/components/ui/Stats'
import { statsData } from '@/components/ui/Stats/sampleData'

export default function AboutPage() {
  return (
    <>
      
      <OurStory />

      <Stats stats={statsData} />

      <TeamSection 
        members={sampleTeamMembers}
        title="Meet Our Amazing Team"
        className="bg-gray-50"
      />
      </>
  )
}