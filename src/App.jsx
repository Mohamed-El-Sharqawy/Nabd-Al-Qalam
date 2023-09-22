import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { pathname } = useParams();

  useEffect(() => {
    window.scroll({ top: 0 });
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
