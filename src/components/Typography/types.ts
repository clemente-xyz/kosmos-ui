import { WithChildren, WithStyle } from "types/general";

export type TTypographyProps = WithChildren &
  WithStyle & {
    as: React.ElementType;
    variant: TTypographyVariant;
  };

export type TTypographyVariant =
  | "title1"
  | "title2"
  | "title3"
  | "subtitle1"
  | "subtitle2"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3";
