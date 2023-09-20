import { Outlet } from "react-router-dom";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";

const App = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
