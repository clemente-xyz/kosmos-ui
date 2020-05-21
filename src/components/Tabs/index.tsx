import React, { useState, useEffect } from "react";

import { IProps, ITabsProps } from "./types";
import { SliderContainer, TabContainer } from "./styles";

/**
 * Renders a sliding underline menu, passing to parent the active component to render.
 * @param content Array of tabs, in which it is specified the tab label and component to render on active mode.
 */
function Tabs({ content }: IProps) {
  const [tabs, setTabs] = useState<ITabsProps[]>([]);

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
  }, [content]);

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

  if (!tabs || content.length === 0) return null;

  const activeComponent = tabs.filter((tab) => tab.isActive)[0];

  return (
    <>
      <SliderContainer>
        {tabs.map((tab, index) => {
          return (
            <TabContainer
              key={`tab-${index}`}
              isActive={tab.isActive}
              onClick={() => handleTabClick(tab._id)}
            >
              {tab.label}
            </TabContainer>
          );
        })}
      </SliderContainer>

      {activeComponent && activeComponent.component}
    </>
  );
}

export default Tabs;
