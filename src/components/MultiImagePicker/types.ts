import { CSSProperties } from "react";
import { DropzoneOptions } from "react-dropzone";

export type IProps = {
  images?: ((File & { preview: string }) | string)[];
  setImages: (images: ((File & { preview: string }) | string)[]) => void;
  options?: DropzoneOptions;
  style?: CSSProperties;
};
