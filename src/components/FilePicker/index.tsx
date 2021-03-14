import React from "react";
import { useDropzone } from "react-dropzone";

import Button from "../Button";
import IllustratedMessage from "../IllustratedMessage";
import theme from "../../theme";

import { IFilePickerProps } from "./types";
import {
  MainContainer,
  SelectContainer,
  Paragraph,
  FilesContainer,
  FileContainer,
} from "./styles";

function FilePicker({
  files = [],
  setFiles,
  options,
  onDropRejected,
  style,
  messages,
  illustration,
}: IFilePickerProps): JSX.Element {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...options,
    onDrop(acceptedFiles) {
      setFiles([...files, ...acceptedFiles]);
    },
    onDropRejected(event) {
      onDropRejected && onDropRejected(event);
    },
  });

  function handleRemoveFile(selectedFile: File) {
    setFiles(
      files.filter((file) => {
        console.log({ file, selectedFile });
        return selectedFile.name !== file.name;
      })
    );
  }

  return (
    <>
      <MainContainer style={style}>
        <input {...getInputProps()} />

        <SelectContainer {...getRootProps()}>
          <IllustratedMessage
            illustration={illustration?.type || "documents"}
            illustrationConfigs={{ height: "64px", ...illustration?.configs }}
            body={
              isDragActive
                ? messages?.default || "Suelta aquí tus archivos..."
                : messages?.onDrag ||
                  "Arrastra tus archivos aquí, o haz click para seleccionar"
            }
            bodyStyle={{ marginTop: 16 }}
          />
        </SelectContainer>

        <FilesContainer>
          {files.map((file, index) => {
            return (
              <FileContainer key={index}>
                <Paragraph>{file.name}</Paragraph>

                <Button
                  variant="primary"
                  format="link"
                  size="small"
                  onClick={() => {
                    handleRemoveFile(file);
                  }}
                >
                  Quitar
                </Button>
              </FileContainer>
            );
          })}
        </FilesContainer>
      </MainContainer>

      {messages?.error && (
        <p style={{ color: theme.colorsPalette.red.default, marginLeft: 10 }}>
          {messages?.error}
        </p>
      )}
    </>
  );
}

export default FilePicker;
