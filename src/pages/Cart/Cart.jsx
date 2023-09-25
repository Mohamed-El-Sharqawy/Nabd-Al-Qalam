import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getTotal } from "../../features/slices/cartSlice";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { lang } = useSelector((state) => state.lang);
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section
      style={
        lang === "en"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      className="shopping-cart"
    >
      {cartItems.length > 0 ? (
        <>
          <div className="shopping-cart-items">
            {cartItems.map((book) => (
              <div
                style={
                  lang === "en"
                    ? { justifyContent: "start", flexDirection: "row" }
                    : { justifyContent: "end", flexDirection: "row-reverse" }
                }
                key={book._id}
                className="shopping-cart-item"
              >
                <img src={book.img} alt="" />
                <div>
                  <h2 dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang == "en" ? book.enTitle : book.arTitle}
                  </h2>
                  <p dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang === "en" ? "Price:" : "السعر:"} {book.price} AED
                  </p>
                  <p dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang === "en"
                      ? `Author: ${book.enAuthor}`
                      : `المؤلف: ${book.arAuthor}`}
                  </p>
                  {book.numberOfPages === 1 ? null : (
                    <p dir={lang === "en" ? "ltr" : "rtl"}>
                      {lang === "en" ? "Pages: " : "الصفحات: "}{" "}
                      {book.numberOfPages}
                    </p>
                  )}
                  <p dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang === "en" ? "َQuantity: " : "الكمية: "} {book.quantity}
                  </p>
                  <div
                    style={
                      lang === "en"
                        ? { justifyContent: "start" }
                        : { justifyContent: "end" }
                    }
                    className="btn-group"
                  >
                    <button
                      onClick={() => {
                        dispatch(clearItem(book._id));
                        dispatch(getTotal());
                      }}
                    >
                      <DeleteIcon />{" "}
                      {lang === "en" ? "Remove" : "احذف من العربة"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shopping-cart-info">
            <h1 dir={lang === "en" ? "ltr" : "rtl"}>
              {lang === "en" ? "The Total Amount:" : "المبلغ الكلي:"}
            </h1>
            <p
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en" ? "Books" : "سعر الكتب"}
              <span>{cartTotalPrice} AED</span>
            </p>
            <p
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en" ? "Shipping" : "مصاريف الشحن"}
              <span>{cartItems?.length > 0 ? 5 : 0} AED</span>
            </p>
            <h3
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en"
                ? "The total amount (Tax Included)"
                : "المبلغ الكلي (بمصاريف الشحن)"}{" "}
              <span>
                {cartTotalPrice + (cartItems?.length > 0 ? 5 : 0)} AED
              </span>
            </h3>
            <button>Go to Checkout</button>
          </div>
        </>
      ) : (
        <h1>
          {lang === "en" ? (
            <>
              Cart is Empty{" "}
              <Link className="shopping-cart-link" to="/">
                Go Add a Book to Buy
              </Link>
            </>
          ) : (
            <>
              العربة فارغة{" "}
              <Link className="shopping-cart-link" to="/">
                اذهب لاضافة بعض الكتب للشراء
              </Link>
            </>
          )}
        </h1>
      )}
    </section>
  );
};

export default Cart;
