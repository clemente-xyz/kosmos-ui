import { ReactNode } from "react";
import { DropzoneOptions, FileRejection, DropzoneState } from "react-dropzone";
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
  removeImage(_: TMultiImagePickerImage): void;
};

export type TMultiImagePickerProps<T> = {
  images?: TMultiImagePickerImage<T>[];
  setImages(_: TMultiImagePickerImage<T>[]): void;
  onDropRejected?: (_: FileRejection[]) => void;
  options?: DropzoneOptions;
  cleanupUrl?: boolean;
  children: ReactNode;
};

export type TMultiImagePickerImage<T = {}> =
  | WithId<T & { url?: string }>
  | (File & { preview: string });
