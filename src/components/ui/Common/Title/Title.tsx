import type { TitleProps } from './Title.type';

export default function Title({
  className = 'flex items-center gap-4 py-8',
  containerClassName = 'text-brand-primary font-semibold',
  title,
  style = {},
  containerStyle = {},
}: TitleProps) {
  return (
    <>
      <div className={className} style={style}>
        <div className="w-5 h-10 bg-brand-primary rounded" />
        <span className={containerClassName} style={containerStyle}>
          {title}
        </span>
      </div>
    </>
  );
}
