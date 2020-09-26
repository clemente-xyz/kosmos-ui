import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import CloseIcon from "../../icons/Close";
import theme from "../../theme";

import { ISectionedDialogProps } from "./types";
import {
  Backdrop,
  Card,
  SectionsContainer,
  SectionContentContainer,
  CloseIconContainer,
  SectionName,
} from "./styles";

function SectionedDialog({
  show,
  setShow,
  header,
  sections,
  cardStyle,
}: ISectionedDialogProps): JSX.Element {
  const [activeSection, setActiveSection] = useState(0);

  const spring = useTransition(show, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    <>
      {spring.map(({ item, key, props }) => {
        return item ? (
          <Backdrop key={key} style={props} aria-modal="true" role="dialog">
            <Card key={key} style={{ ...props, ...cardStyle }}>
              <CloseIconContainer onClick={setShow}>
                <CloseIcon
                  color={theme.colorsPalette.gray.light}
                  height="15px"
                />
              </CloseIconContainer>

              <SectionsContainer>
                {typeof header === "string" ? (
                  <h4 style={{ margin: "0 0 15px 0" }}>{header}</h4>
                ) : (
                  header
                )}

                {sections.map((section, index) => {
                  return (
                    <SectionName
                      isSelected={activeSection === index}
                      onClick={() => setActiveSection(index)}
                      key={index}
                    >
                      {section.header}
                    </SectionName>
                  );
                })}
              </SectionsContainer>

              <SectionContentContainer>
                {sections[activeSection].content}
              </SectionContentContainer>
            </Card>
          </Backdrop>
        ) : null;
      })}
    </>,
    document.body
  );
}

export default SectionedDialog;
