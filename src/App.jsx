import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "./features/slices/authSlice";
import "react-toastify/dist/ReactToastify.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const getLoggedUser = async (decodedToken) => {
    const res = await axios.get(
      `https://nabd-server.onrender.com/users/${decodedToken?.id}`
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

  //SCROLL TOP
  const [topbtn, setTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 370) {
        setTopBtn(true)
      } else {
        setTopBtn(false)
      }
    })
  }, [])
  
  const top = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
      <div className={`topbtn ${topbtn ? "display" : "hide"}`}>
        <span className="top">
          <KeyboardDoubleArrowUpIcon onClick={top} />
        </span>
      </div>
    </>
  );
};

export default App;
