import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { GroupKey } from './Filter.type';

export interface GroupProp {
  title: string;
  children: ReactNode;
  k: GroupKey;
  setExpanded: Dispatch<SetStateAction<Record<GroupKey, boolean>>>;
  expanded: Record<GroupKey, boolean>;
}
