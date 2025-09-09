import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Css Files/NavBar.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
);
