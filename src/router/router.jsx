import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      },
      {
        path: "about",
      },
      {
        path: "contact",
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
