import type { PageWrapperProps } from './PageWrapper.type';

export default function PageWrapper({
  children,
  className = 'flex justify-center items-start flex-col mx-6',
  style = {},
}: PageWrapperProps) {
  return (
    <main className={className} style={style}>
      {children}
    </main>
  );
}
