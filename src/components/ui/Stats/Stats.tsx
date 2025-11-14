import type { StatsProps } from './Stats.type';

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg border text-center ${
            stat.variant === 'primary'
              ? 'bg-brand-primary text-white border-brand-primary'
              : 'bg-white border-gray-200'
          }`}
        >
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              stat.variant === 'primary' ? 'bg-white/20' : 'bg-black'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stat.variant === 'primary'
                  ? 'bg-white text-brand-primary'
                  : 'bg-white'
              }`}
            >
              {stat.icon}
            </div>
          </div>
          <div className="text-xl font-bold mb-2">{stat.value}</div>
          <div
            className={`text-sm ${
              stat.variant === 'primary' ? 'text-white' : 'text-gray-600'
            }`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
