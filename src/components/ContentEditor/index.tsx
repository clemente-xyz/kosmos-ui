import React, { useState, useRef } from "react";
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  DefaultDraftBlockRenderMap,
} from "draft-js";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import "draft-js/dist/Draft.css";

import theme from "../../theme";
import InlineStyleControls from "./components/InlineStyleControls";
import BlockStyleControls from "./components/BlockStyleControls";

import { IProps } from "./types";
import { styleMap } from "./constants";
import { MainContainer, RichEditorContainer } from "./styles";

/**
 * Renders a rich content editor. Transform automatically all typed
 * content into a plain markdown string in order to be easy to save
 * on a db.
 * @param prevContent Previous content (if there is) in plain markdown
 * string format.
 * @param onChange Handler triggered on every content state change.
 * Allows you to manage externally the content you are editing.
 * @param error An error message to display if there is.
 * @param style Extra styles to add to the component main container.
 */
function ContentEditor({
  prevContent,
  onChange: externalOnChange,
  error,
  style,
}: IProps): JSX.Element {
  const contentEditorRef = useRef<Editor>(null);

  const prevRawContent = markdownToDraft(prevContent || "");
  const prevContentState = convertFromRaw(prevRawContent);

  const [editorState, setEditorState] = useState<EditorState>(
    prevContent
      ? EditorState.createWithContent(prevContentState)
      : EditorState.createEmpty()
  );

  function getBlockStyle(block: any) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";

      default:
        return null;
    }
  }

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

  let className = "";

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += "RichEditor-hidePlaceholder";
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

        <RichEditorContainer className={className} onClick={focusContentEditor}>
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
            // TODO: Solve display:none styles issue before re-enabling this prop
            blockRenderMap={DefaultDraftBlockRenderMap}
          />
        </RichEditorContainer>
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
