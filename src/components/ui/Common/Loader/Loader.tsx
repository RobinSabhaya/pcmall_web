import { APP_NAME } from '../../../../config';

export default function Loader() {
  return (
    <>
      {/* Main Loader */}
      <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            {/* Shopping Cart Animation */}
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto">
                <svg
                  className="w-full h-full text-red-500 animate-bounce"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4V2C7 1.45 6.55 1 6 1H4C3.45 1 3 1.45 3 2V4H1C0.45 4 0 4.45 0 5S0.45 6 1 6H3V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V6H23C23.55 6 24 5.55 24 5S23.55 4 23 4H21V2C21 1.45 20.55 1 20 1H18C17.45 1 17 1.45 17 2V4H7ZM5 6H19V18H5V6ZM9 8V16H11V8H9ZM13 8V16H15V8H13Z" />
                </svg>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-red rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>

            {/* Loading Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Loading ${APP_NAME ?? 'App Name'}
              </h3>
              <p className="text-sm text-gray-500">
                Preparing your shopping experience...
              </p>

              {/* Animated dots */}
              <div className="flex justify-center gap-1 mt-3">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-red rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
