import Hero from "../../Components/Hero/Hero";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AgeGroups from "../../Components/AgeGroups/AgeGroups";

const Home = () => {
  return (
    <>
      <div className="images-container">
        <Hero />
        <AgeGroups />
      </div>
    </>
  );
};
export default Home;
