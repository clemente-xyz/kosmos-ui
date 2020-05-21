import { CSSProperties } from "react";

export type IProps = {
  images?: ((File & { preview: string }) | string)[];
  setImages: (images: ((File & { preview: string }) | string)[]) => void;
  style?: CSSProperties;
};
