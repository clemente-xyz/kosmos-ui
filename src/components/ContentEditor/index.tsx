import React, { useState, useRef } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  DefaultDraftBlockRenderMap,
  AtomicBlockUtils,
  Entity
} from "draft-js";

import { mdToDraftjs, draftjsToMd } from 'draftjs-md-converter';

import Editor, { composeDecorators } from 'draft-js-plugins-editor';

import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';

import "draft-js/dist/Draft.css";
import 'draft-js-image-plugin/lib/plugin.css';

import theme from "../../theme";
import InlineStyleControls from "./components/InlineStyleControls";
import BlockStyleControls from "./components/BlockStyleControls";

import mediaBlockRenderer from "./components/MediaBlockRenderer";

import { IContentEditorProps } from "./types";
import { styleMap } from "./constants";
import { MainContainer, RichEditorContainer } from "./styles";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  focusPlugin.decorator,
);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  focusPlugin,
  resizeablePlugin,
  imagePlugin,
];

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
  onImagesChange
}: IContentEditorProps): JSX.Element {
  const contentEditorRef = useRef<Editor>(null);

  const prevRawContent = mdToDraftjs(prevContent || "");
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
  
  function handlePastedFiles(files: Array<Blob>): any {
      var reader  = new FileReader();

      reader.onloadend = function () {
        setEditorState(insertImage(reader.result));
        
        onImagesChange && onImagesChange({file: files[0], url: reader.result});
      }
    
      if (files[0]) {
        reader.readAsDataURL(files[0]);
      }
  }

  const insertImage = (url: any) => {
    const entityKey = Entity.create('IMAGE', 'IMMUTABLE', {src: url});
    const newState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

    return newState;
  };

  const handleKeyCommand = (command: string): any => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
      setEditorState(newState);
			return true;
		}
		return false;
  }

  const contentState = editorState.getCurrentContent();
  const rawObject = convertToRaw(contentState);
  const markdownString = draftjsToMd(rawObject);

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

        <RichEditorContainer className={`${className} editor`} onClick={focusContentEditor}>
          <Editor
            ref={contentEditorRef}
            editorState={editorState}
            plugins={plugins}
            onChange={(editorState) => {
              setEditorState(editorState);
              
              externalOnChange && externalOnChange(markdownString);
            }}
            //@ts-ignore
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            handlePastedFiles={handlePastedFiles}
            handleKeyCommand={handleKeyCommand}
            // TODO: Solve display:none styles issue before re-enabling this prop
            blockRenderMap={DefaultDraftBlockRenderMap}
            blockRendererFn={mediaBlockRenderer}
            onImagesChange={handlePastedFiles}
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
