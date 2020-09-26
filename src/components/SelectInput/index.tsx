import React, { CSSProperties } from "react";

import theme from "../../theme";

import { MainContainer, Select, Highlight, Bar, Label } from "./styles";

type ISelectInputProps = {
  placeholder?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: any) => void;
  id?: string;
  name?: string;
  mainContainerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  baseColor?: string;
  highlightColor?: string;
  onCopy?: () => boolean;
  onCut?: () => boolean;
  onDrag?: () => boolean;
  onDrop?: () => boolean;
  autoComplete?: string;
};

function SelectInput({
  placeholder,
  label,
  value,
  onChange,
  id,
  name,
  mainContainerStyle,
  inputStyle,
  baseColor,
  highlightColor,
  onCopy,
  onCut,
  onDrag,
  onDrop,
  autoComplete,
}: ISelectInputProps): JSX.Element {
  return (
    <MainContainer style={mainContainerStyle}>
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        baseColor={baseColor || theme.colorsPalette.gray.default}
        highlightColor={highlightColor || theme.colorsPalette.black.default}
        required
        onCopy={onCopy}
        onCut={onCut}
        onDrag={onDrag}
        onDrop={onDrop}
        autoComplete={autoComplete}
      />
      <Highlight />
      <Bar
        highlightColor={highlightColor || theme.colorsPalette.black.default}
      />
      <Label baseColor={baseColor || theme.colorsPalette.gray.default}>
        {label}
      </Label>
    </MainContainer>
  );
}

export default SelectInput;
