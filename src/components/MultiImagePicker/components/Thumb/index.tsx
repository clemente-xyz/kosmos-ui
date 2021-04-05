import React, { forwardRef } from "react";

import theme from "../../../../theme";
import { useMultiImagePicker } from "../../hooks";
import DragIcon from "../../../../icons/Drag";
import TrashIcon from "../../../../icons/Trash";

import { TMultiImagePickerThumbProps } from "./types";
import {
  Container,
  HoverContainer,
  IconsContainer,
  ThumbContainer,
  Image,
} from "./styles";

const MultiImagePickerThumb = forwardRef<any, TMultiImagePickerThumbProps>(
  ({ image, style, className }, ref) => {
    const { removeImage } = useMultiImagePicker();

    return (
      <Container ref={ref} className={className} style={style?.container}>
        <IconsContainer onClick={() => removeImage(image)}>
          <DragIcon color={theme.colorsPalette.white.default} height="14px" />

          <TrashIcon color={theme.colorsPalette.white.default} height="14px" />
        </IconsContainer>

        <ThumbContainer>
          <Image
            src={image instanceof File ? image.preview : image.url}
            style={style?.image}
          />
        </ThumbContainer>

        <HoverContainer />
      </Container>
    );
  }
);

export default MultiImagePickerThumb;
