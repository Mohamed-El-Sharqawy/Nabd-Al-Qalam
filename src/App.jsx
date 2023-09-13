import { Outlet } from "react-router-dom";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
