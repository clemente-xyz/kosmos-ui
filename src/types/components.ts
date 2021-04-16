import { WithId } from "./general";

export type TComponentType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export type TComponentFormat = "fill" | "outline" | "link";

export type TComponentSize = "small" | "regular" | "large";

export type TComponentImage<T = {}> = WithId<
  T & { url?: string; file?: File & { preview: string } }
>;
