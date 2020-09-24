import styled from "styled-components";

import theme from "../../theme";

const publicDraftEditorPlaceholderRoot = "public-DraftEditorPlaceholder-root";
const publicDraftEditorContent = "public-DraftEditor-content";
const richEditorHidePlaceholder = "RichEditor-hidePlaceholder";
const richEditorBlockquote = "RichEditor-blockquote";
const publicDraftStyleDefaultPre = "public-DraftStyleDefault-pre";

const MainContainer = styled.section`
  background: #fff;
  border: 1px solid #ddd;
  font-size: 14px;
  padding: 16px;
  z-index: 0;
  color: ${theme.colorsPalette.gray.darker};
`;

const RichEditorControlsContainer = styled.section`
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
`;

const RichEditorContainer = styled.div.attrs({
  publicDraftEditorPlaceholderRoot,
  publicDraftEditorContent,
  richEditorHidePlaceholder,
  richEditorBlockquote,
  publicDraftStyleDefaultPre,
})`
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;

  .${publicDraftEditorPlaceholderRoot}, .${publicDraftEditorContent} {
    margin: 0 -15px -15px;
    padding: 15px;
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

export { MainContainer, RichEditorContainer, RichEditorControlsContainer };
