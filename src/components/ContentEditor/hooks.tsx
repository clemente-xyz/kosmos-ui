import { useContext } from 'react';

import { ContentEditorContext } from './index';

export function useContentEditor() {
  return useContext(ContentEditorContext);
}
