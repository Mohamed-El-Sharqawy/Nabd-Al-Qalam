import Hero from "../../Components/Hero/Hero";
import SliderWardan from "../../Components/SliderWardan/SliderWardan";
// import BadrandBdur from "../../Components/BadrandBdur/Badr";
import AgeGroups from "../../Components/AgeGroups/AgeGroups";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Design from "../../Components/Design/Design";
import { login } from "../../features/slices/authSlice";
import { useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Home = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const getLoggedUser = async (decodedToken) => {
    const res = await axios.get(
      `${import.meta.env.VITE_USERS_ENDPOINT}${decodedToken?.id}`
    );

    dispatch(login(res.data));
  };

  useEffect(() => {
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
      <div className="images-container">
        <Hero />
        <AgeGroups />
        <SliderWardan />
        {/* <BadrandBdur /> */}
        <Design />
      </div>
    </>
  );
};
export default Home;
