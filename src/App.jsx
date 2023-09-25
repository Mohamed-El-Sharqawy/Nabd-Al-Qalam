import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "./features/slices/authSlice";

const App = () => {
  const { pathname } = useParams();
  const dispatch = useDispatch();

  const getLoggedUser = async (decodedToken) => {
    const res = await axios.get(
      `http://localhost:3001/users/${decodedToken?.id}`
    );

    dispatch(login(res.data));
  };

  useEffect(() => {
    window.scroll({ top: 0 });
    const token = localStorage.getItem("jwt");

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken) {
        getLoggedUser(decodedToken);
      }
    }
  }, [pathname]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
