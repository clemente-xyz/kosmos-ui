import { CSSProperties } from "react";

import { TComponentImage } from "../../../../types/components";

export type TMultiImagePickerThumbProps = {
  image: TComponentImage;
  style?: { container?: CSSProperties; image?: CSSProperties };
  className?: string;
};
