export interface QuantityProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}
