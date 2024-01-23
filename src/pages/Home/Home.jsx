import Hero from "../../Components/Hero/Hero";
import SliderWardan from "../../Components/SliderWardan/SliderWardan";
import AgeGroups from "../../Components/AgeGroups/AgeGroups";
import Design from "../../Components/Design/Design";
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
        <Design />
      </div>
    </>
  );
};
export default Home;
