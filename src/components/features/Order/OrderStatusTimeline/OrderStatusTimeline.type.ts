export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface TimelineStep {
  status: OrderStatus;
  label: string;
  description?: string;
  timestamp?: string;
  completed: boolean;
}

export interface OrderStatusTimelineProps {
  steps?: TimelineStep[];
  className?: string;
}
