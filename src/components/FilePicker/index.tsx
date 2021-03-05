import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import theme from "../../theme";

import { IFilePickerProps } from "./types";
import { MainContainer, SelectContainer, Paragraph } from "./styles";

/**
 * Renders an File picker component, which pass to parent the imported img. Renders the picker and also the current selected File.
 * @param setUploadFile Set state function which pass up the File imported object in order to trigger the corresponding mutation.
 * @param style Optional extra styles to add to the components main container.
 */
function FilePicker({
  setUploadFile,
  options,
  style,
  name,
  id,
  errorMessage,
  onDropRejected,
}: IFilePickerProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<
    { file: File; preview: string } | undefined
  >(undefined);

  const onDrop = useCallback(
    ([file]) => {
      if (file) {
        setUploadFile(file);

        setSelectedFile(
          (Object as any).assign(file, {
            preview:
              "https://freeiconshop.com/wp-content/uploads/edd/csv-outline.png",
          })
        );
      }
    },
    [setUploadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected(event) {
      onDropRejected && onDropRejected(event);
    },
    ...options,
    accept: ".csv",
    multiple: false,
  });

  useEffect(
    () => () => {
      if (selectedFile) URL.revokeObjectURL(selectedFile.preview);
    },
    [selectedFile]
  );

  return (
    <>
      <MainContainer
        {...getRootProps()}
        backgroundImage={(selectedFile && selectedFile.preview) || ""}
        style={style}
      >
        <input name={name} id={id} {...getInputProps()} />

        {isDragActive ? (
          <p>Suelta aquí el archivo CSV...</p>
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

export default FilePicker;
