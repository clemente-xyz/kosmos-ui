import { useContext } from "react";

import { MultiImagePickerContext } from "./index";

export function useMultiImagePicker() {
  return useContext(MultiImagePickerContext);
}
