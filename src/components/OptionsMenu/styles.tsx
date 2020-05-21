import styled from "styled-components";

import theme from "../../theme";

const DefaultButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 7px;
  border-radius: 3px;
  /* TODO: Add this color to palette */
  background-color: #f1f1f1;

  transition: all 0.3s;

  &:hover {
    top: 1px;
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

const TriggerPropButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const MenuContainer = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  top: 5px;
  overflow-y: scroll;
  z-index: 3;
  padding: 15px;
  justify-content: space-between;
  min-width: 180px;

  ${({ position }) => {
    if (position === "left") return `right: 0;`;

    return `left: 0;`;
  }}
`;

const Label = styled.div<{ hasSeparator?: boolean }>`
  padding: 10px 20px;
  margin: 0 -15px;
  cursor: default;
  border-bottom: ${({ hasSeparator }) =>
    hasSeparator ? `1px solid ${theme.colorsPalette.gray.superLight}` : "none"};

  &:hover {
    background-color: ${({ hasSeparator }) =>
      !hasSeparator ? theme.colorsPalette.gray.superLight : "none"};
  }
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  /* TODO: Add this color to palette */
  background-color: #929292;
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`;

export { DefaultButton, Dot, TriggerPropButton, MenuContainer, Label };
