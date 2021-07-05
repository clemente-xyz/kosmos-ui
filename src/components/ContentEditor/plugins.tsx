import { KeyBindingUtil } from "draft-js";

import { composeDecorators, EditorPlugin } from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import createFocusPlugin from "@draft-js-plugins/focus";

import { ContentEditorLink } from "./components";

function linkPluginStrategy(
  contentBlock: any,
  callback: any,
  contentState: any
) {
  contentBlock.findEntityRanges((character: any) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

export default function getContentEditorPlugins(readOnly?: boolean) {
  const linkPlugin = {
    keyBindingFn(event: any, { getEditorState }: any) {
      const editorState = getEditorState();
      const selection = editorState.getSelection();

      if (selection.isCollapsed()) {
        return;
      }
      if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
        return "add-link";
      }
    },

    decorators: [
      {
        strategy: linkPluginStrategy,
        component: ContentEditorLink,
      },
    ],
  };

  let plugins: EditorPlugin[] = [linkPlugin];

  if (readOnly) {
    const imagePlugin = createImagePlugin();

    plugins = [...plugins, imagePlugin];
  } else {
    const focusPlugin = createFocusPlugin();

    const decorator = composeDecorators(focusPlugin.decorator);

    const imagePlugin = createImagePlugin({ decorator });

    plugins = [...plugins, focusPlugin, imagePlugin];
  }

  return plugins;
}
