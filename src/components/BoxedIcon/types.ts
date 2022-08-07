import { CSSProperties, ReactNode } from "react";

import { TComponentType } from "../../types/components";

export type TBoxedIconProps = {
  type?: TComponentType;
  icon: ReactNode;
  style?: CSSProperties;
  className?: string;
};
