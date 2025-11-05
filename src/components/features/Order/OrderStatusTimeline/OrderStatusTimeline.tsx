import type { OrderStatusTimelineProps } from './OrderStatusTimeline.type';
import { getStatusColor, getStatusIcon } from './utils';

export default function OrderStatusTimeline({
  steps,
  className = '',
}: OrderStatusTimelineProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        {steps?.map((step, index) => {
          const isLast = index === steps.length - 1;
          const statusColor = getStatusColor(step.status, step.completed);
          const StatusIcon = getStatusIcon(step.status);

          return (
            <div key={step.status} className="relative flex items-start pb-8">
              {/* Connector Line */}
              {!isLast && (
                <div
                  className={`absolute left-4 top-8 w-0.5 h-full ${
                    step.completed ? 'bg-green' : 'bg-light-300'
                  }`}
                />
              )}

              {/* Status Icon */}
              <div
                className={`
                relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2
                ${
                  step.completed
                    ? `${statusColor} border-transparent text-white`
                    : 'bg-light-100 border-light-300 text-dark-500'
                }
              `}
              >
                <StatusIcon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3
                    className={`
                    text-body-medium font-medium
                    ${step.completed ? 'text-dark-900' : 'text-dark-500'}
                  `}
                  >
                    {step.label}
                  </h3>
                  {step.timestamp && (
                    <span className="text-caption text-dark-500">
                      {step.timestamp}
                    </span>
                  )}
                </div>
                {step.description && (
                  <p className="text-caption text-dark-500 mt-1">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
