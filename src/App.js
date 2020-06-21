import React from "react";
import "./styles.css";

import { Editor } from "./Editor";

export default function App() {
  return (
    <div className="App">
      <h1>Slate Plugins Test Env</h1>
      <h2>Check out the editor below:</h2>
      <Editor />
    </div>
  );
}
