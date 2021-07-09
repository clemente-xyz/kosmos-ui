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
  prevContent,
}: Pick<TContentEditorProps, "prevContent">) {
  const [editorState, setEditorState] = useState<EditorState>(
    prevContent
      ? EditorState.createWithContent(
          convertFromRaw(
            mdToDraftjs(
              prevContent || "",
              CONTENT_EDITOR_CUSTOM_CONFIGS.mdToDraftJs as any
            )
          )
        )
      : EditorState.createEmpty()
  );

  useEffect(() => {
    const newContent = EditorState.createWithContent(
      convertFromRaw(
        mdToDraftjs(
          prevContent || "",
          CONTENT_EDITOR_CUSTOM_CONFIGS.mdToDraftJs as any
        )
      )
    );

    setEditorState(newContent);
  }, [prevContent, setEditorState]);

  return { editorState, setEditorState };
}
