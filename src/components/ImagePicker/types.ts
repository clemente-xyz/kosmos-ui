import { SetStateAction, Dispatch, CSSProperties } from "react";
import { DropzoneOptions, FileRejection } from "react-dropzone";

export interface IImagePickerProps {
  setUploadImage: (
    file: any
  ) => void | Dispatch<SetStateAction<File | undefined>>;
  prevImage?: string;
  options?: DropzoneOptions;
  style?: CSSProperties;
  name?: string;
  id?: string;
  errorMessage?: string;
  onDropRejected?: (error: FileRejection[]) => void;
}
