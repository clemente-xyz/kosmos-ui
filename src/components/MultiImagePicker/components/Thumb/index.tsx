import React, { forwardRef } from "react";

import theme from "../../../../theme";
import CloseIcon from "../../../../icons/Close";
import { useMultiImagePicker } from "../../hooks";
import { TMultiImagePickerImage } from "../../types";

import { Container, CloseIconContainer, ThumbContainer, Image } from "./styles";

const MultiImagePickerThumb = forwardRef<
  any,
  { image: TMultiImagePickerImage }
>(({ image }, ref) => {
  const { removeImage } = useMultiImagePicker();

  return (
    <Container ref={ref}>
      <CloseIconContainer onClick={() => removeImage(image)}>
        <CloseIcon color={theme.colorsPalette.white.default} height="8px" />
      </CloseIconContainer>

      <ThumbContainer>
        <Image src={image instanceof File ? image.preview : image} />
      </ThumbContainer>
    </Container>
  );
});

export default MultiImagePickerThumb;
