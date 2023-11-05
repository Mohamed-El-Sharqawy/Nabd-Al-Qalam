import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const App = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [topbtn, setTopBtn] = useState(false);

  const top = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    if (window.scrollY >= 370) {
      setTopBtn(true);
    } else {
      setTopBtn(false);
    }
  };

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer position="bottom-right" />
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
      <div className={`topbtn ${topbtn ? "display" : "hide"}`}>
        <span onClick={top} className="top">
          <KeyboardDoubleArrowUpIcon />
        </span>
      </div>
      {/* Loader */}
      <div
        className={`loader-container ${
          !isLoading && "loader-container-fadeOut"
        }`}
      >
        <span className="loader"></span>
      </div>
    </>
  );
};

export default App;
