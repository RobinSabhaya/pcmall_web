import type { LineSkeletonProps } from './LineSkeleton.type';

const LineSkeleton = ({ count }: LineSkeletonProps) => {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-light-300 p-6 animate-pulse"
        >
          <div className="h-4 bg-light-300 rounded w-1/4 mb-4" />
          <div className="h-3 bg-light-300 rounded w-1/2 mb-2" />
          <div className="h-3 bg-light-300 rounded w-1/3" />
        </div>
      ))}
    </div>
  );
};

export default LineSkeleton;
