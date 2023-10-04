import Hero from "../../Components/Hero/Hero";
import SliderWardan from "../../Components/SliderWardan/SliderWardan";
import BadrandBdur from '../../Components/BadrandBdur/Badr'
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <div className="images-container">
        <Hero />
        <SliderWardan />
        <BadrandBdur />
      </div>
    </>
  );
};
export default Home;
