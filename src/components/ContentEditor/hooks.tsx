import { useContext, useEffect, useState } from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { mdToDraftjs } from "draftjs-md-converter";

import { ContentEditorContext } from "./index";
import { TContentEditorProps } from "./types";
import { CONTENT_EDITOR_CUSTOM_CONFIGS } from "./constants";

export function useContentEditor() {
  return useContext(ContentEditorContext);
}

export function useContentEditorState({
  value,
  readOnly,
}: Pick<TContentEditorProps, "value" | "readOnly">) {
  const [editorState, setEditorState] = useState<EditorState>(
    value
      ? EditorState.createWithContent(
          convertFromRaw(
            mdToDraftjs(
              value || "",
              CONTENT_EDITOR_CUSTOM_CONFIGS.mdToDraftJs as any
            )
          )
        )
      : EditorState.createEmpty()
  );

  useEffect(() => {
    if (readOnly) {
      const newContent = EditorState.createWithContent(
        convertFromRaw(
          mdToDraftjs(
            value || "",
            CONTENT_EDITOR_CUSTOM_CONFIGS.mdToDraftJs as any
          )
        )
      );

      setEditorState(newContent);
    }
  }, [value, readOnly, setEditorState]);

  return { editorState, setEditorState };
}
