import CustomSVG from '../../SVG/CustomSVG';

export const defaultIcon = (
  <div className="relative">
    <div className="w-24 h-24 bg-light-200 rounded-2xl flex items-center justify-center mb-2">
      <CustomSVG className="w-12 h-12 text-dark-500" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </CustomSVG>
    </div>
    <div className="absolute -top-1 -right-1 w-6 h-6 bg-light-300 rounded-full flex items-center justify-center">
      <CustomSVG className="w-3 h-3 text-dark-700" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </CustomSVG>
    </div>
  </div>
);
