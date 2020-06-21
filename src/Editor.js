import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";
import {
  ParagraphPlugin,
  BoldPlugin,
  EditablePlugins,
  ItalicPlugin,
  UnderlinePlugin,
  pipe
} from "@udecode/slate-plugins";

const initialValue = [
  {
    children: [{ text: "This is editable plain text, just like a <textarea>!" }]
  }
];

const plugins = [
  ParagraphPlugin(),
  BoldPlugin(),
  ItalicPlugin(),
  UnderlinePlugin()
];

const withPlugins = [withReact, withHistory];

export const Editor = () => {
  const [value, setValue] = useState(initialValue);

  const editor = useMemo(
    () =>
      pipe(
        createEditor(),
        ...withPlugins
      ),
    []
  );

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <EditablePlugins plugins={plugins} placeholder="Enter some text..." />
    </Slate>
  );
};
