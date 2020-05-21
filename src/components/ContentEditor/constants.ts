const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Cita", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Código", style: "code-block" },
];

const INLINE_STYLES = [
  { label: "Negrita", style: "BOLD" },
  { label: "Itálica", style: "ITALIC" },
  { label: "Subrayado", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: "Inconsolata, Menlo, Consolas, monospace",
    fontSize: 16,
    padding: 2,
  },
};

export { BLOCK_TYPES, INLINE_STYLES, styleMap };
