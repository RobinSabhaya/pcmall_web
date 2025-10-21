import type { ComingSoonProps } from './ComingSoon.type';

export default function ComingSoon({
  title = 'Coming Soon',
  subtitle = 'Something amazing is on the way',
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-100 to-light-200">
      <div className="text-center max-w-lg mx-auto p-8">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <span className="text-6xl animate-pulse">🚀</span>
          <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Content */}
        <h1 className="text-6xl font-bold text-dark-900 mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-dark-500 mb-12 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
