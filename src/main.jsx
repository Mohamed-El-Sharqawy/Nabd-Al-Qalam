<<<<<<< HEAD
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
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 0a3d97895db48b85c1dfec4729ec437316ff60d8
