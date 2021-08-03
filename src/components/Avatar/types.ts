import { ReactNode } from "react";

import { WithStyle } from "../../types/general";

export type TAvatarProps = WithStyle<{
  children: ReactNode;
  src?: string;
  alt?: string;
  height?: number;
  withInitials?: boolean;
}>;
