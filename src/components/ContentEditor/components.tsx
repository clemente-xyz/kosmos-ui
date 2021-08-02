import React, { ReactNode } from "react";

import "draft-js/dist/Draft.css";

import Dropdown from "../Dropdown";
import UnderlineIcon from "../../icons/Underline";
import TitlesIcon from "../../icons/Titles";
import LinkIcon from "../../icons/Link";
import BoldIcon from "../../icons/Bold";
import ItalicIcon from "../../icons/Italic";
import StrikethroughIcon from "../../icons/Strikethrough";
import UListIcon from "../../icons/UList";
import OListIcon from "../../icons/OList";
import { WithStyle } from "../../types/general";

import { useContentEditor } from "./hooks";
import { TContentEditorContext } from "./types";
import {
  ControlsContainer,
  ControlButtonContainer,
  HeaderContainer,
  UnstyledButton,
} from "./styles";

const TITLES_BLOCK_TYPES = [
  { label: <b style={{ fontSize: 17 }}>Título</b>, style: "header-two" },
  { label: <b style={{ fontSize: 12 }}>Subtítulo</b>, style: "header-one" },
];

const BLOCK_TYPES = [
  { label: <UListIcon />, style: "unordered-list-item" },
  { label: <OListIcon />, style: "ordered-list-item" },
];

const INLINE_STYLES = [
  { label: <BoldIcon />, style: "BOLD" },
  {
    label: <UnderlineIcon height="17px" style={{ marginBottom: -2 }} />,
    style: "UNDERLINE",
  },
  { label: <ItalicIcon />, style: "ITALIC" },
  { label: <StrikethroughIcon />, style: "STRIKETHROUGH" },
];

export function ContentEditorControls({ style, className }: WithStyle) {
  const {
    editorState,
    onToggleBlockType,
    onToggleInlineStyle,
    onToggleLinkStyle,
  } = useContentEditor();

  const selection = editorState.getSelection();

  const currentBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const currentInlineStyle = editorState.getCurrentInlineStyle();

  return (
    <ControlsContainer className={className} style={style}>
      <Dropdown>
        <Dropdown.ToggleButton style={{ marginRight: 16 }}>
          <TitlesIcon />
        </Dropdown.ToggleButton>

        <Dropdown.Menu style={{ zIndex: 9999, minWidth: 132 }}>
          {TITLES_BLOCK_TYPES.map((type, index) => (
            <Dropdown.Item
              default
              style={{ padding: "6px 20px" }}
              key={`content-editor-control-${index}`}
            >
              <ContentEditorControlButton
                active={type.style === currentBlockType}
                label={type.label}
                onToggle={onToggleBlockType}
                style={type.style}
              />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {INLINE_STYLES.map((type, index) => (
        <ContentEditorControlButton
          key={`content-editor-control-${index}`}
          active={currentInlineStyle.has(type.style)}
          label={type.label}
          onToggle={onToggleInlineStyle}
          style={type.style}
        />
      ))}

      {BLOCK_TYPES.map((type, index) => (
        <ContentEditorControlButton
          key={`content-editor-control-${index}`}
          active={type.style === currentBlockType}
          label={type.label}
          onToggle={onToggleBlockType}
          style={type.style}
        />
      ))}

      <UnstyledButton onClick={onToggleLinkStyle}>
        <LinkIcon style={{ marginBottom: -2 }} />
      </UnstyledButton>
    </ControlsContainer>
  );
}

export function ContentEditorSubmit({
  children,
}: {
  children: (_: TContentEditorContext) => ReactNode;
}) {
  const contextProps = useContentEditor();

  return <>{children(contextProps)}</>;
}

export function Header({
  children,
  style,
  className,
}: WithStyle<{ children: ReactNode }>) {
  return (
    <HeaderContainer style={style} className={className}>
      {children}
    </HeaderContainer>
  );
}

export function ContentEditorHeader({
  children,
  style,
  className,
}: WithStyle<{ children: ReactNode }>) {
  return (
    <HeaderContainer style={style} className={className}>
      {children}
    </HeaderContainer>
  );
}

export function ContentEditorControlButton(props: {
  onToggle: (blockType: any) => void;
  active: boolean;
  label: string | ReactNode;
  style: string;
}) {
  return (
    <ControlButtonContainer
      onMouseDown={(event) => {
        event.stopPropagation();
        event.preventDefault();

        props.onToggle(props.style);
      }}
      active={props.active}
    >
      {props.label}
    </ControlButtonContainer>
  );
}

export function ContentEditorLink(props: any) {
  const { contentState, entityKey } = props;
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <a
      className="link"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >
      {props.children}
    </a>
  );
}
