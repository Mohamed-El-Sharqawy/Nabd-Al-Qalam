import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../../../features/slices/cartSlice";
import { toast } from "react-toastify";

const Popup = ({ setPopup, popup, chosenBook }) => {
  const [value, setValue] = useState(1);
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const increase = () => setValue(() => value + 1);

  const decrease = () => {
    if (value == 1) return;
    setValue(() => value - 1);
  };

  return (
    <div
      style={
        lang === "ar"
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
      className={`popup ${popup ? "show" : "hidden"}`}
    >
      <div
        className="left-popup"
        style={lang === "ar" ? { textAlign: "right" } : { textAlign: "left" }}
      >
        <p className="title">
          {lang == "en" ? chosenBook.enTitle : chosenBook.arTitle}
        </p>
        <h4 className="price">{chosenBook.price} AED</h4>
        <p className="overview">
          {lang == "en" ? chosenBook.enDescription : chosenBook.arDescription}
        </p>
        <div className="btnpopup">
          <button className="btnclick" onClick={() => decrease()}>
            -
          </button>
          <span className="counter-product">{value}</span>
          <button className="btnclick" onClick={() => increase()}>
            +
          </button>
        </div>
        <div className="addcart">
          <button
            onClick={() => {
              setPopup(false);
              for (let i = 0; i < value; i++) {
                dispatch(addToCart(chosenBook));
                dispatch(getTotal());
              }

              toast.success("Added to The Cart", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            {lang == "en" ? "Add To Cart" : "اضف الي العربة"}
          </button>
        </div>
      </div>
      <div className="right-popup">
        <img
          src={chosenBook.img}
          alt={lang == "en" ? chosenBook.enTitle : chosenBook.arTitle}
        />
      </div>
      <div className="close">
        <AiFillCloseCircle className="close" onClick={() => setPopup(false)} />
      </div>
    </div>
  );
};

export default Popup;
