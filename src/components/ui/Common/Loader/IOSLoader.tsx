import type { CSSProperties } from 'react';
import './IOSLoader.css';

interface IOSLoaderProps {
  className?: string;
  childClassName?: string;
  style?: CSSProperties;
}

export default function IOSLoader({
  className,
  childClassName = '',
  style,
}: IOSLoaderProps) {
  return (
    <div className={`loader ${className}`} style={style}>
      <div className={`bar1 ${childClassName}`} />
      <div className={`bar2 ${childClassName}`} />
      <div className={`bar3 ${childClassName}`} />
      <div className={`bar4 ${childClassName}`} />
      <div className={`bar5 ${childClassName}`} />
      <div className={`bar6 ${childClassName}`} />
      <div className={`bar7 ${childClassName}`} />
      <div className={`bar8 ${childClassName}`} />
      <div className={`bar9 ${childClassName}`} />
      <div className={`bar10 ${childClassName}`} />
      <div className={`bar11 ${childClassName}`} />
      <div className={`bar12 ${childClassName}`} />
    </div>
  );
}
