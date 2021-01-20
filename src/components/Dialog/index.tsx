import React from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import Button from "../../components/Button";
import CloseIcon from "../../icons/Close";
import theme from "../../theme";

import { IDialogProps } from "./types";
import {
  Backdrop,
  Card,
  Header,
  Paragraph,
  ContentContainer,
  CloseIconContainer,
  ButtonsContainer,
} from "./styles";

function Dialog({
  isOpen,
  header,
  content,
  confirmAction,
  declineAction,
  cardStyle,
}: IDialogProps) {
  const spring = useTransition(isOpen, null, {
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
              <CloseIconContainer
                onClick={
                  //@ts-ignore
                  !React.isValidElement(declineAction) && declineAction.callback
                }
              >
                <CloseIcon
                  color={theme.colorsPalette.gray.light}
                  height="15px"
                />
              </CloseIconContainer>

              {typeof header === "string" ? <Header>{header}</Header> : header}

              {typeof content === "string" ? (
                <ContentContainer>
                  <Paragraph>{content}</Paragraph>
                </ContentContainer>
              ) : (
                content
              )}

              {declineAction &&
                //@ts-ignore
                declineAction.message && (
                  <ButtonsContainer>
                    {React.isValidElement(declineAction) ? (
                      declineAction
                    ) : (
                      <Button
                        //@ts-ignore
                        onClick={declineAction.callback}
                        variant={confirmAction ? "secondary" : "primary"}
                        format={confirmAction ? "outline" : "fill"}
                        style={{ marginRight: confirmAction ? "16px" : "none" }}
                      >
                        {
                          //@ts-ignore
                          declineAction.message
                        }
                      </Button>
                    )}

                    {confirmAction &&
                      (React.isValidElement(confirmAction) ? (
                        confirmAction
                      ) : (
                        <Button
                          //@ts-ignore
                          onClick={confirmAction.callback}
                          variant="primary"
                        >
                          {
                            //@ts-ignore
                            confirmAction.message
                          }
                        </Button>
                      ))}
                  </ButtonsContainer>
                )}
            </Card>
          </Backdrop>
        ) : null;
      })}
    </>,
    document.body
  );
}

export default Dialog;
