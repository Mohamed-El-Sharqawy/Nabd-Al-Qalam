import "./landing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbHeartPlus } from "react-icons/tb";
import { BsEye } from "react-icons/Bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  const [popup, setPopup] = useState(false);
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    if (value == 1) return;
    setValue(value - 1);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="images-container">
        <div className="container">
          <h2>Best Seller</h2>
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
              <img
                src="/src/assets/اسرار الفضاء مع هزاع و أصدقائه.jpeg"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg" alt="" />
            </div>
            <div className="card-caption">
              <p className="caption">
                God’s prophets in their stories are examples
              </p>
              <span className="price">19 AED</span>
            </div>
            <div className="shopping">
              <div className="icons">
                <TbHeartPlus />
                <BsEye onClick={() => setPopup(!popup)} />
              </div>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/src/assets/أشعه اكس.JPG" alt="" />
            </div>
            <div className="card-caption">
              <p className="caption">X-Ray</p>
              <span className="price">20 AED</span>
            </div>
            <div className="shopping">
              <div className="icons">
                <TbHeartPlus />
                <BsEye />
              </div>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/src/assets/اخبرني عن خوفك.jpg" alt="" />
            </div>
            <div className="card-caption">
              <p className="caption">Tell me about your fear</p>
              <span className="price">19 AED</span>
            </div>
            <div className="shopping">
              <div className="icons">
                <TbHeartPlus />
                <BsEye />
              </div>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="/src/assets/اسرار الفضاء مع هزاع و أصدقائه.jpeg"
                alt=""
              />
            </div>
            <div className="card-caption">
              <p className="caption">
                Space secrets with Hazza and his friends.
              </p>
              <span className="price">19 AED</span>
            </div>
            <div className="shopping">
              <div className="icons">
                <TbHeartPlus />
                <BsEye />
              </div>
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className={`popup ${popup ? "show" : "hidden"}`}>
            <div className="left-popup">
              <p className="title">
                God’s prophets in their stories are examples
              </p>
              <p className="where">in the store</p>
              <h4 className="price">30 AED</h4>
              <p className="overview">
                A collection of stories from some of the prophets, one of the
                best and most enjoyable stories, containing faith,
                knowledge,work, worship, lesson, and benefit, narrated in a
                creative and exciting manner.
              </p>
              <div className="btnpopup">
                <button className="btnclick" onClick={() => increase()}>
                  +
                </button>
                <span className="counter">{value}</span>
                <button className="btnclick" onClick={() => decrease()}>
                  -
                </button>
              </div>
              <div className="addcart">
                <button>Add To Cart</button>
              </div>
            </div>
            <div className="right-popup">
              <img src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg" alt="" />
            </div>
            <div className="close">
              <AiFillCloseCircle
                className="close"
                onClick={() => setPopup(false)}
              />
            </div>
          </div>
          {/* Banners */}
          <div className="twobanner">
            <div className="bnr">
              <Link to="/">
                <img src="/src/assets/banner-space.jpg" alt="" />
              </Link>
            </div>
            <div className="bnr">
              <Link to="/">
                <img src="/src/assets/banner-wardan.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
