import React, {
  useState,
  createContext,
  useContext,
  useRef,
  MouseEvent,
  ReactNode,
} from "react";

import { useClickOutsideContainer } from "../../hooks";
import ToggleButton from "./components/ToggleButton";
import Menu from "./components/Menu";
import Item from "./components/Item";

import { TDropdown, TDropdownContext } from "./types";

const DropdownContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  triggerButtonElement: null,
  setTriggerButtonElement: () => {},
  triggerButtonRef: null,
  setTriggerButtonRef: () => {},
  menuContainerRef: { current: null },
} as TDropdownContext);
DropdownContext.displayName = "DropdownContext";

function useDropdown() {
  return useContext(DropdownContext);
}

function Dropdown({ children }: { children: ReactNode }): TDropdown {
  const menuContainerRef = useRef(null);

  const [
    triggerButtonElement,
    setTriggerButtonElement,
  ] = useState<HTMLButtonElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [
    triggerButtonRef,
    setTriggerButtonRef,
  ] = useState<HTMLButtonElement | null>(null);

  function handleClickOutsideMenu(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const isOutsideMenu =
      menuContainerRef &&
      menuContainerRef.current &&
      !((menuContainerRef.current as unknown) as HTMLElement).contains(
        event.target as Node
      );

    const isOutsideTriggerButton =
      triggerButtonElement &&
      !triggerButtonElement.contains(event.target as Node);

    if (isOutsideMenu && isOutsideTriggerButton) setIsMenuOpen(false);
  }

  useClickOutsideContainer(menuContainerRef, (event) => {
    event && handleClickOutsideMenu(event);
  });

  return ((
    <DropdownContext.Provider
      value={{
        triggerButtonElement,
        setTriggerButtonElement,
        triggerButtonRef,
        setTriggerButtonRef,
        isMenuOpen,
        setIsMenuOpen,
        menuContainerRef,
      }}
    >
      {children}
    </DropdownContext.Provider>
  ) as unknown) as TDropdown;
}

Dropdown.ToggleButton = ToggleButton;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
export { useDropdown };
