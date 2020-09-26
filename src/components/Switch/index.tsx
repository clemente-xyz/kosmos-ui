import React, { CSSProperties, FocusEvent } from "react";

import { MainContainer, Input, Label, ErrorParagraph } from "./styles";

type ISwitchProps = {
  checked?: boolean;
  onChange?: (event: any) => void;
  id?: string;
  name?: string;
  mainContainerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  baseColor?: string;
  onCopy?: () => boolean;
  onCut?: () => boolean;
  onDrag?: () => boolean;
  onDrop?: () => boolean;
  autoComplete?: string;
  onBlur?: (event: FocusEvent<any>) => void;
  error?: string;
};

function Switch({
  checked,
  onChange,
  id,
  name,
  mainContainerStyle,
  inputStyle,
  baseColor,
  onBlur,
  onCopy,
  onCut,
  onDrag,
  onDrop,
  autoComplete,
  error,
}: ISwitchProps): JSX.Element {
  return (
    <MainContainer style={mainContainerStyle}>
      <Input
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        style={inputStyle}
        type="checkbox"
        baseColor={baseColor}
        onCopy={onCopy}
        onCut={onCut}
        onDrag={onDrag}
        onDrop={onDrop}
        autoComplete={autoComplete}
        onBlur={onBlur}
      />

      <Label htmlFor={id} />

      {error && <ErrorParagraph>{error}</ErrorParagraph>}
    </MainContainer>
  );
}

export default Switch;
