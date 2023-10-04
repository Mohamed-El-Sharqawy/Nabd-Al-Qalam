import './badr.css'
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
const Badr = () => {
const settings = {
dots: true,
infinite: true,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
speed: 2000,
autoplaySpeed: 2000,
cssEase: "linear",
};
const { lang } = useSelector((state) => state.lang);

return (
<>
<div className="slide-containerBadr">
    <h2>{lang === "en" ? "Badr And Bdur Series" : "سلسلة بدر و بدور"}</h2>
    <div className="SliderBadr">
    <Slider {...settings}>
        <div className="sliderImageBadr">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1694803485/nabdu_al_qalam/p91adzhyvqmccxxz0nob.jpg"
            alt=""
        />
        </div>
        <div className="sliderImageBadr">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1694803420/nabdu_al_qalam/bk3fmosc1tpsf5fpczbe.jpg"
            alt=""
        />
        </div>
        <div className="sliderImageBadr">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1694803388/nabdu_al_qalam/qcsek3vje6k9xkipht5g.jpg"
            alt=""
        />
        </div>
        <div className="sliderImageBadr">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1694803342/nabdu_al_qalam/zesnaldi9vzl9gmob2qt.jpg"
            alt=""
        />
        </div>
        <div className="sliderImageBadr">
        <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1694803231/nabdu_al_qalam/na6ifr93ywac7otuegbd.jpg"
            alt=""
        />
        </div>
    </Slider>
    </div>
</div>
</>
);
}


export default Badr