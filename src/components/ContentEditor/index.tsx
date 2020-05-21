import React, { useState, useRef } from "react";
import {
  Editor,
  EditorState,
  convertToRaw,
  RichUtils,
  DefaultDraftBlockRenderMap,
} from "draft-js";
import { draftToMarkdown } from "markdown-draft-js";
import "draft-js/dist/Draft.css";
import "./styles.css";

import theme from "../../theme";
import InlineStyleControls from "./components/InlineStyleControls";
import BlockStyleControls from "./components/BlockStyleControls";

import { IProps } from "./types";
import { styleMap } from "./constants";
import { MainContainer } from "./styles";

function getBlockStyle(block: any) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";

    default:
      return null;
  }
}

function ContentEditor({
  placeholder,
  onChange: externalOnChange,
  style,
  error,
}: IProps) {
  const contentEditorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  function focusContentEditor() {
    contentEditorRef &&
      contentEditorRef.current &&
      //@ts-ignore
      contentEditorRef.current.focus();
  }

  function toggleBlockType(blockType: any) {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(inlineStyle: any) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }

  const contentState = editorState.getCurrentContent();
  const rawObject = convertToRaw(contentState);
  const markdownString = draftToMarkdown(rawObject);

  let className = "RichEditor-editor";

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += " RichEditor-hidePlaceholder";
    }
  }

  return (
    <>
      <MainContainer style={style}>
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />

        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />

        <div className={className} onClick={focusContentEditor}>
          <Editor
            ref={contentEditorRef}
            editorState={editorState}
            onChange={(editorState) => {
              setEditorState(editorState);

              externalOnChange && externalOnChange(markdownString);
            }}
            //@ts-ignore
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            placeholder={placeholder || "Escribe aquí tu contenido..."}
            blockRenderMap={DefaultDraftBlockRenderMap}
          />
        </div>
      </MainContainer>

      {error && (
        <p style={{ color: theme.colorsPalette.red.default, marginTop: 10 }}>
          {error}
        </p>
      )}
    </>
  );
}

export default ContentEditor;
