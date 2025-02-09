// Main Imports
import ReactDOM from "react-dom/client";
import "./index.css";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
// Redux
import { store } from "./features/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
