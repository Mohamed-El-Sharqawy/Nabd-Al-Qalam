import "./landing.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { TbHeartPlus } from "react-icons/tb";
import { BsEye } from "react-icons/Bs";

const Landing = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="images-container">
        <h1>Best Sellers</h1>
        <div className="cards">
          {/* Slider */}
          <div className="slider">
            <Carousel responsive={responsive}>
              <div className="book-img">
                <img
                  src="/src/assets/حكايات وردان.jpeg"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/زايد نبراس الحكمه.jpeg"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/فكر و العب.JPG"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/مغامرات فى ارض الفايكنج.JPG"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/المسبار الجديد 1.JPG"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/الدوده مورى.JPG"
                  draggable={false}
                  alt=""
                />
              </div>
              <div className="book-img">
                <img
                  src="/src/assets/كوكب الوفاق.jpeg"
                  draggable={false}
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          {/* Cards */}
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
                <BsEye />
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
        </div>
      </div>
    </>
  );
};
export default Landing;
