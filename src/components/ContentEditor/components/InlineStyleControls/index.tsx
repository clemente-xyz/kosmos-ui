import React from "react";

import StyleButton from "../StyleButton";
import { INLINE_STYLES } from "../../constants";
import { RichEditorControlsContainer } from "../../styles";

function InlineStyleControls(props: any) {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <RichEditorControlsContainer>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </RichEditorControlsContainer>
  );
}

export default InlineStyleControls;
