import { useContext } from 'react';

import { TabsContext } from './index';

export function useTabs() {
  return useContext(TabsContext);
}
