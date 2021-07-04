import { KeyBindingUtil } from "draft-js";

import { composeDecorators } from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import createFocusPlugin from "@draft-js-plugins/focus";

import { ContentEditorLink } from "./components";

function linkStrategy(contentBlock: any, callback: any, contentState: any) {
  contentBlock.findEntityRanges((character: any) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

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
      strategy: linkStrategy,
      component: ContentEditorLink,
    },
  ],
};

const focusPlugin = createFocusPlugin();

const decorator = composeDecorators(focusPlugin.decorator);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [linkPlugin, focusPlugin, imagePlugin];

export default plugins;
