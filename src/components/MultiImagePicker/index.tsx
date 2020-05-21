import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

import theme from "../../theme";
import Button from "../Button";
import CloseIcon from "../../icons/Close";

import { IProps } from "./types";
import {
  ThumbContainer,
  Thumb,
  ThumbsContainer,
  Image,
  CloseIconContainer,
} from "./styles";

function ImagePicker({ images = [], setImages }: IProps) {
  const { getRootProps, getInputProps } = useDropzone({
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
    <section>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ width: "fit-content" }}
      >
        <input {...getInputProps()} />

        <Button
          onClick={() => {}}
          text="Seleccionar"
          type="primary"
          format="outline"
          size="small"
        />
      </div>

      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </section>
  );
}

export default ImagePicker;
