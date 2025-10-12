import type { CSSProperties } from 'react';
import './IOSLoader.css';

interface IOSLoaderProps {
  className?: string;
  style?: CSSProperties;
}

export default function IOSLoader({ className, style }: IOSLoaderProps) {
  return (
    <div className={`loader ${className}`} style={style}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
      <div className="bar7" />
      <div className="bar8" />
      <div className="bar9" />
      <div className="bar10" />
      <div className="bar11" />
      <div className="bar12" />
    </div>
  );
}
