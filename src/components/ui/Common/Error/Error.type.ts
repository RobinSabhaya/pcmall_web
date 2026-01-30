import type { CSSProperties } from 'react';

import type { AnyFieldApi } from '@tanstack/react-form';

export interface ErrorProp {
  field: AnyFieldApi;
  message?: string;
  className?: string;
  style?: CSSProperties;
}
