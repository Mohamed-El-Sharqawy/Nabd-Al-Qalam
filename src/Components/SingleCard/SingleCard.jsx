// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";

const SingleCard = ({ book, popup, setPopup, setChosenBook }) => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={book.img}
          alt={lang === "en" ? book.enTitle : book.arTitle}
          title={lang === "en" ? book.enTitle : book.arTitle}
        />
      </div>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="card-caption"
      >
        <p className="caption" dir={lang === "en" ? "ltr" : "rtl"}>
          {lang === "en" ? book.enTitle : book.arTitle}
        </p>
        <span
          className="price"
          dir={lang === "en" ? "ltr" : "rtl"}
          style={{ justifyContent: "end" }}
        >
          {book.price}
          {lang === "en" ? " AED" : " درهم"}
        </span>
      </div>
      <div className="shopping">
        <div className="icons">
          {/* <FavoriteBorderOutlinedIcon /> */}
          <RemoveRedEyeOutlinedIcon
            onClick={() => {
              if (popup) return;
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
            toast.success("Added to The Cart", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          {lang === "en" ? " Add to cart" : "أضف الى العربة"}
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
