import React, { CSSProperties } from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { markdownToDraft } from "markdown-draft-js";
import "draft-js/dist/Draft.css";

import { MainContainer } from "./styles";

/**
 * Renders a rich content text.
 * @param content Mardown-based string to be displayed.
 * @param style Extra styles to add to the component main container.
 */
function ContentViewer({
  content,
  style,
}: {
  content: string;
  style?: CSSProperties;
}): JSX.Element {
  const rawContent = markdownToDraft(content);
  const contentState = convertFromRaw(rawContent);
  const editorState = EditorState.createWithContent(contentState);

  return (
    <MainContainer style={style}>
      <Editor editorState={editorState} readOnly={true} onChange={() => {}} />
    </MainContainer>
  );
}

export default ContentViewer;
