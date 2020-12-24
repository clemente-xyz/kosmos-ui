import React, { Dispatch, SetStateAction } from "react";

import ToggleButton from "./components/ToggleButton";
import Menu from "./components/Menu";
import Item from "./components/Item";

export type TDropdown = JSX.Element & {
  ToggleButton: typeof ToggleButton;
  Menu: typeof Menu;
  Item: typeof Item;
};

export type TDropdownContext = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  triggerButtonElement: HTMLButtonElement | null;
  setTriggerButtonElement: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
  triggerButtonRef: HTMLButtonElement | null;
  setTriggerButtonRef: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
  menuContainerRef: React.MutableRefObject<null>;
};
