export const CONTENT_EDITOR_CUSTOM_CONFIGS = {
  draftJsToMd: {
    STRIKETHROUGH: "~~",
  },
  mdToDraftJs: {
    inlineStyles: {
      Delete: {
        type: "STRIKETHROUGH",

        symbol: "~~",
      },
    },
  },
  styleMap: {
    STRIKETHROUGH: {
      textDecoration: "line-through",
    },
  },
};
