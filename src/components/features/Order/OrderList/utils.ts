import { capitalizeString } from '../../../../utils';

export enum PaymentStatus {
  ALL = 'All',
  SUCCESS = 'SUCCESS',
  PAID = 'PAID',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
  PENDING = 'PENDING',
  REFUND_SUCCESS = 'REFUND_SUCCESS',
  REFUND_FAILED = 'REFUND_FAILED',
}

export const filterList = Object.values(PaymentStatus).map(ps => ({
  key: ps,
  label: capitalizeString(ps.toLowerCase().replaceAll('_', ' ')),
}));
