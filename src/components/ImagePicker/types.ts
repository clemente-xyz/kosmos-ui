import { SetStateAction, Dispatch, CSSProperties } from "react";

export type IProps = {
  setUploadImage: (
    file: any
  ) => void | Dispatch<SetStateAction<File | undefined>>;
  prevImage?: string;
  style?: CSSProperties;
  name?: string;
  id?: string;
  error?: string;
};
