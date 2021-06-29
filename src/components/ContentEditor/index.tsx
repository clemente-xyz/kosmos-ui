import React, { useState, useCallback, createContext, useRef } from "react";
import Editor from "@draft-js-plugins/editor";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  DefaultDraftBlockRenderMap,
  DraftHandleValue,
  ContentState,
  AtomicBlockUtils,
  Entity,
} from "draft-js";
import { mdToDraftjs, draftjsToMd } from "draftjs-md-converter";

import "draft-js/dist/Draft.css";
import "@draft-js-plugins/image/lib/plugin.css";
import "@draft-js-plugins/focus/lib/plugin.css";
import "@draft-js-plugins/alignment/lib/plugin.css";

import {
  TContentEditor,
  TContentEditorContext,
  TContentEditorProps,
} from "./types";
import {
  ContentEditorControlButton,
  ContentEditorControls,
  ContentEditorHeader,
  ContentEditorSubmit,
} from "./components";
import plugins from "./plugins";
import { Container, EditorContainer } from "./styles";

const customMdConfigs = {
  inlineStyles: {
    Delete: {
      type: "STRIKETHROUGH",
      symbol: "~~",
    },
  },
};

export const ContentEditorContext = createContext({} as TContentEditorContext);

export default function ContentEditor({
  prevContent,
  onChange,
  onImagesChange,
  placeholder,
  readOnly,
  style,
  className: baseClassName,
  children,
}: TContentEditorProps) {
  const editorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState<EditorState>(
    prevContent
      ? EditorState.createWithContent(
          convertFromRaw(mdToDraftjs(prevContent || "", customMdConfigs as any))
        )
      : EditorState.createEmpty()
  );

  const handleReset = useCallback(() => {
    const newState = EditorState.push(
      editorState,
      ContentState.createFromText(""),
      "insert-characters"
    );

    setEditorState(newState);
  }, [editorState]);

  function getBlockStyle(block: any) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";

      default:
        return "";
    }
  }

  function getMDFromState() {
    const contentState = editorState.getCurrentContent();
    const rawObject = convertToRaw(contentState);
    const mdString = draftjsToMd(rawObject);

    return mdString;
  }

  function focusEditor() {
    editorRef?.current && editorRef.current.focus();
  }

  function toggleBlockType(blockType: any) {
    setEditorState((editorState) =>
      RichUtils.toggleBlockType(editorState, blockType)
    );
  }

  function toggleInlineStyle(inlineStyle: any) {
    setEditorState((editorState) =>
      RichUtils.toggleInlineStyle(editorState, inlineStyle)
    );
  }

  function toggleLinkStyle() {
    const link = window.prompt("Pega aquí tu link");
    const selection = editorState.getSelection();
    const editorContent = editorState.getCurrentContent();
    const contentWithEntity = editorContent.createEntity("LINK", "MUTABLE", {
      url: link,
    });
    const entityKey = contentWithEntity.getLastCreatedEntityKey();

    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      "apply-entity"
    );

    setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));

    const newMDString = getMDFromState();

    onChange && onChange(newMDString);

    setTimeout(() => focusEditor(), 0);

    return "handled";
  }

  function handleKeyCommand(command: string): DraftHandleValue {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);

      return "handled";
    }

    return "not-handled";
  }

  function handlePastedFiles(files: Array<Blob>): DraftHandleValue {
    var reader = new FileReader();

    reader.onloadend = function () {
      const url = reader.result;

      const entityKey = Entity.create("IMAGE", "IMMUTABLE", { src: url });
      const newState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        " "
      );

      setEditorState(newState);

      onImagesChange && onImagesChange({ file: files[0], url });
    };

    if (files[0]) reader.readAsDataURL(files[0]);

    return "handled";
  }

  let className = baseClassName?.editor || "";

  const contentState = editorState.getCurrentContent();
  const mdString = getMDFromState();

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += "RichEditor-hidePlaceholder";
    }
  }

  return (
    <ContentEditorContext.Provider
      value={{
        editorState,
        onToggleInlineStyle: toggleInlineStyle,
        onToggleBlockType: toggleBlockType,
        onToggleLinkStyle: toggleLinkStyle,
        handleReset,
      }}
    >
      <Container className={baseClassName?.root} style={style?.root}>
        {children}

        <EditorContainer
          className={className}
          style={style?.editor}
          onClick={focusEditor}
        >
          <Editor
            ref={editorRef}
            editorState={editorState}
            onChange={(editorState) => {
              setEditorState(editorState);

              onChange && onChange(mdString, handleReset);
            }}
            blockStyleFn={getBlockStyle}
            handleKeyCommand={handleKeyCommand}
            handlePastedFiles={handlePastedFiles}
            blockRenderMap={DefaultDraftBlockRenderMap}
            placeholder={placeholder}
            readOnly={readOnly}
            plugins={plugins}
          />
        </EditorContainer>
      </Container>
    </ContentEditorContext.Provider>
  ) as unknown as TContentEditor;
}

ContentEditor.ControlButton = ContentEditorControlButton;
ContentEditor.Controls = ContentEditorControls;
ContentEditor.Submit = ContentEditorSubmit;
ContentEditor.Header = ContentEditorHeader;
