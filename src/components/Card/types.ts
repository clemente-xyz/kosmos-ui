import { ButtonHTMLAttributes, ReactNode } from "react";
import { WithChildren, WithStyle } from "types/general";

export type TCardProps = WithChildren &
  WithStyle & {
    header?: string | ReactNode;
    as?: React.ElementType;
  } & Pick<ButtonHTMLAttributes<any>, "onClick" | "disabled">;
