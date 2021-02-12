import { CSSProperties } from "react";
import { DropzoneOptions, FileRejection } from "react-dropzone";

export interface IVectorProps {
  height?: string;
  color?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: CSSProperties;
  className?: string;
}

export type TDirection = "up" | "down" | "left" | "right";

export type TPosition = "top" | "bottom" | "center";

export type TStyledComponentType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export type TMultiImagePickerProps = {
  images?: ((File & { preview: string }) | string)[];
  setImages: (images: ((File & { preview: string }) | string)[]) => void;
  onDropRejected?: (error: FileRejection[]) => void;
  options?: DropzoneOptions;
};

export type TStyledComponentFormat = "fill" | "outline";

export type TStyledComponentSize = "small" | "regular" | "large";
