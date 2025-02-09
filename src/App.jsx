import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [topbtn, setTopBtn] = useState(false);
  useToken();

  // Create a client
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
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

      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
};

export default App;
