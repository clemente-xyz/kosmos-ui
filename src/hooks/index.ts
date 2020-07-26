import {
  useEffect,
  useState,
  MutableRefObject,
  MouseEvent,
  ReactNode,
} from "react";

/**
 * Alert clicks outside of the passed ref.
 * @param ref React ref to which the click outside will be measured.
 * @param callback Callback to execute once the click outside happens (optional).
 * @returns A flag indicating if the user clicked or not outside the passed ref component.
 */
function useOutsideContainer(
  ref: MutableRefObject<any>,
  callback?: () => void
) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback();

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

function useTabs({
  content,
}: {
  content: {
    component: ReactNode;
    label: string;
  }[];
}) {
  const [tabs, setTabs] = useState<
    {
      _id: string;
      component: ReactNode;
      label: string;
      isActive: boolean;
    }[]
  >([]);

  useEffect(() => {
    if (content.length > 0) {
      content.map((item, index) => {
        if (index === 0) {
          return setTabs([
            {
              _id: `tab-${index}`,
              component: item.component,
              label: item.label,
              isActive: true,
            },
          ]);
        }

        return setTabs((prevTabs) => [
          ...prevTabs,
          {
            _id: `tab-${index}`,
            component: item.component,
            label: item.label,
            isActive: false,
          },
        ]);
      });
    }
  }, []);

  function handleTabClick(tabId: string) {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab._id === tabId) {
          return { ...tab, isActive: true };
        }

        return { ...tab, isActive: false };
      })
    );
  }

  return { tabs, handleTabClick };
}

export { useOutsideContainer, useTabs };
