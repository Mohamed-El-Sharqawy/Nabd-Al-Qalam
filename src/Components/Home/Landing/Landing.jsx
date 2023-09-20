import "./landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./landing.css";
import Cards from "../Cards/Cards";
import ComingSoon from "../ComingSoon/ComingSoon";

const Landing = () => {
  return (
    <>
      <div className="images-container">
        {/* Slider */}
        <ComingSoon />
        {/* Cards */}
        <Cards />
      </div>
    </>
  );
};
export default Landing;
