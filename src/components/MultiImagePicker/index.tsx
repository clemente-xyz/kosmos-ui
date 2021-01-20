import React, { useEffect, CSSProperties } from "react";
import { useDropzone } from "react-dropzone";

import theme from "../../theme";
import Button from "../Button";
import CloseIcon from "../../icons/Close";
import { TMultiImagePickerProps } from "../../types";

import {
  ThumbContainer,
  Thumb,
  ThumbsContainer,
  Image,
  CloseIconContainer,
} from "./styles";

function MultiImagePicker({
  images = [],
  setImages,
  options,
  style,
  errorMessage,
  onDropRejected,
}: TMultiImagePickerProps & {
  errorMessage?: string;
  style?: CSSProperties;
}): JSX.Element {
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

  function removeImage(
    selectedImage:
      | (File & {
          preview: string;
        })
      | string
  ) {
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

  const thumbs = images.map((image, index) => {
    return (
      <ThumbContainer
        key={image instanceof File ? image.name : `${index}-${image}`}
      >
        <CloseIconContainer
          onClick={() => {
            removeImage(image);
          }}
        >
          <CloseIcon color={theme.colorsPalette.white.default} height="8px" />
        </CloseIconContainer>

        <Thumb>
          <Image src={image instanceof File ? image.preview : image} />
        </Thumb>
      </ThumbContainer>
    );
  });

  useEffect(
    () => () => {
      images.forEach((image) => {
        image instanceof File && URL.revokeObjectURL(image.preview);
      });
    },
    [images]
  );

  return (
    <section style={style}>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ width: "fit-content" }}
      >
        <input {...getInputProps()} />

        <Button
          onClick={() => {}}
          text="Seleccionar"
          variant="secondary"
          size="small"
        />
      </div>

      <ThumbsContainer>{thumbs}</ThumbsContainer>

      {errorMessage && (
        <p style={{ color: theme.colorsPalette.red.default, marginLeft: 10 }}>
          {errorMessage}
        </p>
      )}
    </section>
  );
}

export default MultiImagePicker;
