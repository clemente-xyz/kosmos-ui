import { ReactNode } from "react";
import { DropzoneOptions, FileRejection, DropzoneState } from "react-dropzone";
import { TComponentImage } from "types/components";
import MultiImagePickerSelectButton from "./components/SelectButton";
import MultiImagePickerThumb from "./components/Thumb";
import MultiImagePickerThumbs from "./components/Thumbs";

export type TMultiImagePicker = JSX.Element & {
  SelectButton: typeof MultiImagePickerSelectButton;
  Thumbs: typeof MultiImagePickerThumbs;
  Thumb: typeof MultiImagePickerThumb;
};

export type TMultiImagePickerContext = Pick<
  DropzoneState,
  "getRootProps" | "getInputProps"
> & {
  removeImage(_: TComponentImage): void;
};

export type TMultiImagePickerProps<T> = {
  images?: TComponentImage<T>[];
  setImages(_: TComponentImage<T>[]): void;
  onDropRejected?: (_: FileRejection[]) => void;
  options?: DropzoneOptions;
  cleanupUrl?: boolean;
  children: ReactNode;
};
