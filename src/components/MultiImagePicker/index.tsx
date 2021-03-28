import React, { useEffect, createContext } from "react";
import { useDropzone } from "react-dropzone";

import {
  TMultiImagePicker,
  TMultiImagePickerContext,
  TMultiImagePickerImage,
  TMultiImagePickerProps,
} from "./types";
import MultiImagePickerSelectButton from "./components/SelectButton";
import MultiImagePickerThumb from "./components/Thumb";
import MultiImagePickerThumbs from "./components/Thumbs";

export const MultiImagePickerContext = createContext(
  {} as TMultiImagePickerContext
);
MultiImagePickerContext.displayName = "MultiImagePickerContext";

export default function MultiImagePicker({
  images = [],
  setImages,
  options,
  onDropRejected,
  cleanupUrl,
  children,
}: TMultiImagePickerProps): TMultiImagePicker {
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

  function removeImage(selectedImage: TMultiImagePickerImage) {
    setImages(
      images.filter((image) => {
        if (image instanceof File) {
          return selectedImage instanceof File
            ? selectedImage.name !== image.name
            : true;
        }

        return typeof selectedImage === "string"
          ? selectedImage !== image
          : true;
      })
    );
  }

  useEffect(
    () => () => {
      cleanupUrl &&
        images.forEach((image) => {
          image instanceof File && URL.revokeObjectURL(image.preview);
        });
    },
    [images]
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
