import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import theme from "../../theme";

import { IImagePickerProps } from "./types";
import { MainContainer, SelectContainer, Paragraph } from "./styles";

/**
 * Renders an image picker component, which pass to parent the imported img. Renders the picker and also the current selected img.
 * @param setUploadImage Set state function which pass up the File imported object in order to trigger the corresponding mutation.
 * @param prevImage A string containing the URL reference to the prev img (before being set it up by the picker).
 * @param style Optional extra styles to add to the components main container.
 */
function ImagePicker({
  setUploadImage,
  prevImage,
  options,
  style,
  name,
  id,
  errorMessage,
  onDropRejected,
}: IImagePickerProps): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<
    { file: File; preview: string } | undefined
  >(undefined);

  const onDrop = useCallback(
    ([file]: File[]) => {
      if (file) {
        setUploadImage(file);

        setSelectedImage(
          (Object as any).assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setUploadImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected(event) {
      onDropRejected && onDropRejected(event);
    },
    ...options,
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
            <SelectContainer>
              <Paragraph>Seleccionar</Paragraph>
            </SelectContainer>
          </>
        )}
      </MainContainer>

      {errorMessage && (
        <p style={{ color: theme.colorsPalette.red.default, marginLeft: 10 }}>
          {errorMessage}
        </p>
      )}
    </>
  );
}

export default ImagePicker;
