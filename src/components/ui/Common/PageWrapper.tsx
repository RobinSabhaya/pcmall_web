import type { PageWrapperProps } from './PageWrapper.type';

export default function PageWrapper({
  children,
  className = '',
  style = {},
}: PageWrapperProps) {
  return (
    <main className={`${className}`} style={style}>
      {children}
    </main>
  );
}
