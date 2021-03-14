import { CSSProperties, ReactNode } from "react";
import { DropzoneOptions, FileRejection } from "react-dropzone";

import { TIllustratedMessageConfigs } from "../IllustratedMessage/types";
export interface IFilePickerProps {
  files?: File[];
  setFiles(files: File[]): void;
  options?: DropzoneOptions;
  onDropRejected?: (error: FileRejection[]) => void;
  style?: CSSProperties;
  messages?: {
    default?: string;
    onDrag?: string;
    error?: string;
  };
  illustration?: {
    type?: ReactNode;
    configs?: TIllustratedMessageConfigs;
  };
}
