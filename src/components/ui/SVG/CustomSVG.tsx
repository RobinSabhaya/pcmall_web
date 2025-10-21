import type { CustomSVGProps } from './CustomSVG.type';

const CustomSVG = ({
  className,
  fillColor = 'none',
  stroke = 'currentColor',
  viewBox = '',
  children,
  ...rest
}: CustomSVGProps) => {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      fill={fillColor}
      stroke={stroke}
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default CustomSVG;
