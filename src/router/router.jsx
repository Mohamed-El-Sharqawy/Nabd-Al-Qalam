import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
      },
      {
        path: "sign-up",
      },
      {
        path: "sign-in",
      },
      {
        path: ":id",
      },
      {
        path: "*",
      },
    ],
  },
]);
