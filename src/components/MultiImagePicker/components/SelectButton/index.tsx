import React from "react";

import Button from "../../../Button";

import { useMultiImagePicker } from "../../hooks";

import { TMultiImagePickerSelectButtonProps } from "./types";

export default function MultiImagePickerSelectButton({
  as,
  children,
  style,
  className,
}: TMultiImagePickerSelectButtonProps) {
  const { getRootProps, getInputProps } = useMultiImagePicker();

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      style={{ width: "fit-content" }}
    >
      <input {...getInputProps()} />

      {as || (
        <Button
          variant="primary"
          format="link"
          size="small"
          className={className}
          style={style}
        >
          {children}
        </Button>
      )}
    </div>
  );
}
