import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import AddBooks from "../pages/AddBooks/AddBooks";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Signup from "../pages/Singup/Signup";
import Login from "../pages/Login/Login";
import Cards from "../Components/Cards/Cards";

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
        path: "about",
        element: <About />,
      },
      {
        path: "shopping-cart",
        element: <Cart />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "books",
        element: <Cards />,
      },
      {
        path: "*",
      },
    ],
  },
]);
