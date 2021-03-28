import { ReactNode } from 'react';
import { DropzoneOptions, FileRejection, DropzoneState } from 'react-dropzone';
import MultiImagePickerSelectButton from './components/SelectButton';
import MultiImagePickerThumb from './components/Thumb';
import MultiImagePickerThumbs from './components/Thumbs';

export type TMultiImagePicker = JSX.Element & {
  SelectButton: typeof MultiImagePickerSelectButton;
  Thumbs: typeof MultiImagePickerThumbs;
  Thumb: typeof MultiImagePickerThumb;
};

export type TMultiImagePickerContext = Pick<
  DropzoneState,
  'getRootProps' | 'getInputProps'
> & {
  removeImage(
    selectedImage:
      | (File & {
          preview: string;
        })
      | string
  ): void;
};

export type TMultiImagePickerProps = {
  images?: TMultiImagePickerImage[];
  setImages(images: ((File & { preview: string }) | string)[]): void;
  onDropRejected?: (error: FileRejection[]) => void;
  options?: DropzoneOptions;
  cleanupUrl?: boolean;
  children: ReactNode;
};

export type TMultiImagePickerImage = (File & { preview: string }) | string;
