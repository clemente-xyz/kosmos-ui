import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import theme from "../../theme";

import { IProps } from "./types";
import { ImageContainer, MainContainer, Paragraph } from "./styles";

/**
 * Renders an image picker component, which pass to parent the imported img. Renders the picker and also the current selected img.
 * @param setUploadImage Set state function which pass up the File imported object in order to trigger the corresponding mutation.
 * @param prevImage A string containing the URL reference to the prev img (before being set it up by the picker).
 * @param style Optional extra styles to add to the components main container.
 */
function ImagePicker({
  setUploadImage,
  prevImage,
  style,
  name,
  id,
  error,
}: IProps) {
  const [selectedImage, seSelectedImage] = useState<
    { file: File; preview: string } | undefined
  >(undefined);

  const onDrop = useCallback(
    ([file]) => {
      seSelectedImage(
        (Object as any).assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setUploadImage(file);
    },
    [setUploadImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  useEffect(
    () => () => {
      if (selectedImage) URL.revokeObjectURL(selectedImage.preview);
    },
    [selectedImage]
  );

  return (
    <>
      <MainContainer
        {...getRootProps()}
        backgroundImage={
          (selectedImage && selectedImage.preview) || prevImage || ""
        }
        style={style}
      >
        <input name={name} id={id} {...getInputProps()} />

        {isDragActive ? (
          <p>Suelta aquí tu imagen...</p>
        ) : (
          <>
            <ImageContainer>
              <Paragraph>Seleccionar</Paragraph>
            </ImageContainer>
          </>
        )}
      </MainContainer>

      {error && (
        <p style={{ color: theme.colorsPalette.red.default, marginLeft: 10 }}>
          {error}
        </p>
      )}
    </>
  );
}

export default ImagePicker;
