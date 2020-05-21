import React from "react";

import { BLOCK_TYPES } from "../../constants";
import StyleButton from "../StyleButton";

import { RichEditorControlsContainer } from "../../styles";

function BlockStyleControls(props: any) {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <RichEditorControlsContainer>
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </RichEditorControlsContainer>
  );
}

export default BlockStyleControls;
