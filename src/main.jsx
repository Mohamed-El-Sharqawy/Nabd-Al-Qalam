// Main Imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
