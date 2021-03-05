import { SetStateAction, Dispatch, CSSProperties } from 'react';
import { DropzoneOptions, FileRejection } from 'react-dropzone';

export interface IFilePickerProps {
  setUploadFile: (
    file: any
  ) => void | Dispatch<SetStateAction<File | undefined>>;
  options?: DropzoneOptions;
  style?: CSSProperties;
  name?: string;
  id?: string;
  errorMessage?: string;
  onDropRejected?: (error: FileRejection[]) => void;
}
