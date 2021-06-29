import styled from "styled-components";

import theme from "../../theme";

const publicDraftEditorPlaceholderRoot = "public-DraftEditorPlaceholder-root";
const publicDraftEditorContent = "public-DraftEditor-content";
const richEditorHidePlaceholder = "RichEditor-hidePlaceholder";
const richEditorBlockquote = "RichEditor-blockquote";
const publicDraftStyleDefaultPre = "public-DraftStyleDefault-pre";

export const Container = styled.aside`
  background: ${theme.colorsPalette.white.default};
  border: 1px solid ${theme.colorsPalette.gray.lighter};
  border-radius: 6px;
  font-size: 14px;
  padding: 16px;
  z-index: 0;
  color: ${theme.colorsPalette.gray.darker};
`;

export const EditorContainer = styled.div.attrs({
  publicDraftEditorPlaceholderRoot,
  publicDraftEditorContent,
  richEditorHidePlaceholder,
  richEditorBlockquote,
  publicDraftStyleDefaultPre,
})`
  border-top: 1px solid ${theme.colorsPalette.gray.lighter};
  cursor: text;
  font-size: 16px;
  margin-top: 10px;

  .${publicDraftEditorPlaceholderRoot}, .${publicDraftEditorContent} {
    margin: 0 -16px -16px;
    padding: 16px;
  }

  .${publicDraftEditorContent} {
    min-height: 100px;
  }

  .${richEditorBlockquote} {
    border-left: 5px solid #eee;
    color: #666;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .${publicDraftStyleDefaultPre} {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: "Inconsolata", "Menlo", "Consolas", monospace;
    font-size: 16px;
    padding: 20px;
  }

  /* TODO: This styles are not being triggered. Solve this issue to enable 
  placeholdere prop */
  /* .${richEditorHidePlaceholder}, .${publicDraftEditorPlaceholderRoot} {
    display: none;
  } */
`;

export const ControlsContainer = styled.section`
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
`;

export const ControlButtonContainer = styled.span<{ active: boolean }>`
  color: ${({ active }) =>
    active ? theme.colorsPalette.blue.default : theme.colorsPalette.gray.dark};
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UnstyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
