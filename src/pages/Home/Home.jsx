import Cards from "../../Components/Cards/Cards";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ComingSoon from "../ComingSoon/ComingSoon";

const Home = () => {
  return (
    <>
      <div className="images-container">
        {/* <ComingSoon /> */}
        <Cards />
      </div>
    </>
  );
};
export default Home;
