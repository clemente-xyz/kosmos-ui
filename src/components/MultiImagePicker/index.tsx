import React, { useEffect, createContext } from "react";
import { useDropzone } from "react-dropzone";

import {
  TMultiImagePicker,
  TMultiImagePickerContext,
  TMultiImagePickerProps,
} from "./types";
import MultiImagePickerSelectButton from "./components/SelectButton";
import MultiImagePickerThumb from "./components/Thumb";
import MultiImagePickerThumbs from "./components/Thumbs";
import { TComponentImage } from "types/components";

export const MultiImagePickerContext = createContext(
  {} as TMultiImagePickerContext
);
MultiImagePickerContext.displayName = "MultiImagePickerContext";

export default function MultiImagePicker<T = {}>({
  images = [],
  setImages,
  options,
  onDropRejected,
  cleanupUrl,
  children,
}: TMultiImagePickerProps<T>): TMultiImagePicker {
  const { getRootProps, getInputProps } = useDropzone({
    ...options,
    accept: "image/*",
    onDrop(acceptedFiles) {
      setImages([
        ...images,
        ...acceptedFiles.map((image) =>
          (Object as any).assign(image, {
            preview: URL.createObjectURL(image),
          })
        ),
      ]);
    },
    onDropRejected(event) {
      onDropRejected && onDropRejected(event);
    },
  });

  function removeImage(selectedImage: TComponentImage<T>) {
    setImages(
      images.filter((image) => {
        if (image instanceof File) {
          return selectedImage instanceof File
            ? selectedImage.name !== image.name
            : true;
        }

        return "_id" in selectedImage ? selectedImage._id !== image._id : true;
      })
    );
  }

  useEffect(
    () => () => {
      !cleanupUrl &&
        images.forEach((image) => {
          image instanceof File && URL.revokeObjectURL(image.preview);
        });
    },
    [images, cleanupUrl]
  );

  return ((
    <MultiImagePickerContext.Provider
      value={{ getInputProps, getRootProps, removeImage }}
    >
      {children}
    </MultiImagePickerContext.Provider>
  ) as unknown) as TMultiImagePicker;
}

MultiImagePicker.SelectButton = MultiImagePickerSelectButton;
MultiImagePicker.Thumbs = MultiImagePickerThumbs;
MultiImagePicker.Thumb = MultiImagePickerThumb;
