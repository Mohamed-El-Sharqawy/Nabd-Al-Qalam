import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AddBooks from "../pages/AddBooks/AddBooks";

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
        path: "add-books",
        element: <AddBooks />,
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
