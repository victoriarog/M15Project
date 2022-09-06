import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Test from "./test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Test />
  </StrictMode>
);
