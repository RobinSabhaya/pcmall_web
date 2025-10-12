'use client';

import { useMemo } from 'react';

import useSlider from '@/hooks/useSlider';

import TeamMemberCard from './TeamCard/TeamCard';
import type { TeamSectionProps } from './TeamSection.type';

export default function TeamSection({
  members,
  title = 'Our Team',
  className = '',
}: TeamSectionProps) {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const { setSelectItem, selectItem } = useSlider({
    maxShowItems: itemsPerPage,
    itemsLength: members.length,
  });

  const visibleMembers = useMemo(() => {
    const startIndex = (Number(selectItem) - 1) * itemsPerPage;
    return members.slice(startIndex, startIndex + itemsPerPage);
  }, [members, selectItem, itemsPerPage]);

  const handleDotClick = (pageIndex: number) => {
    setSelectItem(pageIndex + 1);
  };

  if (members.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectItem === index + 1
                    ? 'bg-red-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
