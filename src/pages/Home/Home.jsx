import Hero from "../../Components/Hero/Hero";
import SliderWardan from "../../Components/SliderWardan/SliderWardan";
import BadrandBdur from "../../Components/BadrandBdur/Badr";
import AgeGroups from "../../Components/AgeGroups/AgeGroups";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <div className="images-container">
        <Hero />
        <AgeGroups />
        <SliderWardan />
        <BadrandBdur />
      </div>
    </>
  );
};
export default Home;
