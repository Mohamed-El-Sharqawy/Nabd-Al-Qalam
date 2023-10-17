import Slider  from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide.css'
const SliderWardan = () => {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    };
const { lang } = useSelector((state) => state.lang);
return (
<>
<div className="slide-container">
    <div className="Slider">
    <h2>{lang === "en" ? "Wardan Series" : "سلسلة وردان"}</h2>
    <Slider {...settings}>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647923/nabdu_al_qalam/yhtd228omgqagjcsif1r.jpg"
            alt=""
        />
        </div>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647853/nabdu_al_qalam/q6heg5uiaiyuzgpe9ct1.jpg"
            alt=""
        />
        </div>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647763/nabdu_al_qalam/tghwbbfev3dv8xtqsiz7.jpg"
            alt=""
        />
        </div>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647684/nabdu_al_qalam/ubo2djrcdcvope5ad40d.jpg"
            alt=""
        />
        </div>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647589/nabdu_al_qalam/psija8wiqtkivskwdm4o.jpg"
            alt=""
        />
        </div>
        <div className="sliderImage">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1695647439/nabdu_al_qalam/cophr7hoqhf5jx7hnijt.jpg"
            alt=""
        />
        </div>
    </Slider>
    </div>
</div>
</>
);
}
export default SliderWardan;
