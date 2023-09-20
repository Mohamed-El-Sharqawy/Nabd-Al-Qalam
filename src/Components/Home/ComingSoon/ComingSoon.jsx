import { useSelector } from "react-redux";
import Slider from "react-slick";

const ComingSoon = () => {
  const { lang } = useSelector((state) => state.lang);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <h2>{lang === "en" ? "Coming Soon" : "سيصدر قريبا"}</h2>
      <Slider {...settings}>
        <div>
          <img src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg" alt="" />
        </div>
        <div>
          <img src="/src/assets/المسبار الجديد 1.JPG" alt="" />
        </div>
        <div>
          <img src="/src/assets/بدر و شمس.JPG" alt="" />
        </div>
        <div>
          <img src="/src/assets/حكايات وردان.jpeg" alt="" />
        </div>
        <div>
          <img src="/src/assets/بدر و شمس.JPG" alt="" />
        </div>
        <div>
          <img src="/src/assets/اسرار الفضاء مع هزاع و أصدقائه.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ComingSoon;
