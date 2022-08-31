import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);


const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (typeof hook != 'undefined') {
  if (!hook.on) {
    hook.on = () => {}
  }
  if (!hook.off) {
    hook.off = () => {}
  }
}