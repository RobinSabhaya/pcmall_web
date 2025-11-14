import type { HorizontalLineProps } from './horizontalLine.type';

export default function HorizontalLine({
  className = '',
  style = {},
}: HorizontalLineProps) {
  return (
    <div className={`w-full h-[1px] bg-gray-200 ${className}`} style={style} />
  );
}
