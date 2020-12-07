import React, {
  useEffect,
  useState,
  useCallback,
  MutableRefObject,
  MouseEvent,
  ReactNode,
} from "react";
import { useDropzone } from "react-dropzone";

import { TMultiImagePickerProps } from "../types";

/**
 * Alert clicks outside of the passed ref.
 * @param ref React ref to which the click outside will be measured.
 * @param callback Callback to execute once the click outside happens (optional).
 * @returns A flag indicating if the user clicked or not outside the passed ref component.
 */
function useClickOutsideContainer(
  ref: MutableRefObject<any>,
  callback?: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void
) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback(event);

        setClickedOutside(true);
      }
    }

    //@ts-ignore
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //@ts-ignore
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, clickedOutside, callback]);

  return clickedOutside;
}

/**
 * Provides state logic management and a click handler for creating a
 * Tabs component.
 * @param content Array of tabs, in which it is specified the tab
 * label and component to render on active mode.
 * @returns Current tabs status and the tab click handler.
 */
function useTabs(
  tabIds: string[]
): {
  tabs: {
    _id: string;
    isActive: boolean;
  }[];
  handleTabClick: (tabId: string) => void;
} {
  const [tabs, setTabs] = useState<
    {
      _id: string;
      isActive: boolean;
    }[]
  >(getInitialConfigs());

  const handleTabClick = useCallback(
    (tabId: string) =>
      setTabs((prevTabs) =>
        prevTabs.map((tab) => {
          if (tab._id === tabId) {
            return { ...tab, isActive: true };
          }

          return { ...tab, isActive: false };
        })
      ),
    []
  );

  function getInitialConfigs() {
    if (tabIds.length <= 0) return [];

    return tabIds.map((_id, index) => {
      if (index === 0) {
        return {
          _id,
          isActive: true,
        };
      }

      return {
        _id,
        isActive: false,
      };
    });
  }

  return { tabs, handleTabClick };
}

function useMultiImagePicker({
  images = [],
  setImages,
  options,
  onDropRejected,
}: TMultiImagePickerProps) {
  const ImagePicker = ({ children }: { children: ReactNode }) => {
    const { getRootProps, getInputProps } = useDropzone({
      ...options,
      accept: "image/*",
      onDrop(acceptedFiles) {
        setImages([
          ...images,
          ...acceptedFiles.map((image) =>
            (Object as any).assign(image, {
              preview: URL.createObjectURL(image),
            })
          ),
        ]);
      },
      onDropRejected(event) {
        onDropRejected && onDropRejected(event);
      },
    });

    return (
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ width: "fit-content" }}
      >
        <input {...getInputProps()} />

        {children}
      </div>
    );
  };

  function removeImage(
    selectedImage:
      | (File & {
          preview: string;
        })
      | string
  ) {
    setImages(
      images.filter((image) => {
        if (image instanceof File) {
          return selectedImage instanceof File
            ? selectedImage.name !== image.name
            : true;
        }

        return typeof selectedImage === "string"
          ? selectedImage !== image
          : true;
      })
    );
  }

  useEffect(
    () => () => {
      images.forEach((image) => {
        image instanceof File && URL.revokeObjectURL(image.preview);
      });
    },
    [images]
  );

  return { ImagePicker, images, removeImage };
}

export { useClickOutsideContainer, useTabs, useMultiImagePicker };
