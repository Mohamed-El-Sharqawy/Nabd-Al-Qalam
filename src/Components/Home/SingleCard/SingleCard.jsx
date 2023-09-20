import { TbHeartPlus } from "react-icons/tb";
import { BsEye } from "react-icons/Bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../../../features/slices/cartSlice";

const SingleCard = ({ book, popup, setPopup, setChosenBook }) => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <img src={book.img} alt="" />
      </div>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="card-caption"
      >
        <p className="caption">{lang === "en" ? book.enTitle : book.arTitle}</p>
        <span
          className="price"
          style={
            lang === "en"
              ? { justifyContent: "end" }
              : { justifyContent: "start" }
          }
        >
          {book.price} AED
        </span>
      </div>
      <div className="shopping">
        <div className="icons">
          <TbHeartPlus />
          <BsEye
            onClick={() => {
              setPopup(!popup);
              setChosenBook(book);
            }}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            dispatch(addToCart(book));
            dispatch(getTotal());
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
