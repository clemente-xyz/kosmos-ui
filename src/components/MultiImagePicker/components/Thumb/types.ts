import { CSSProperties } from 'react';

import { TMultiImagePickerImage } from '../../types';

export type TMultiImagePickerThumbProps = {
  image: TMultiImagePickerImage;
  style?: { container?: CSSProperties; image?: CSSProperties };
  className?: string;
};
