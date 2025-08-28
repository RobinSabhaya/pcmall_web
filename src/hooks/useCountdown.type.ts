export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownDisplayProps {
  time: CountdownTime;
}
