import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearItem,
  getTotal,
  deleteFromCart,
} from "../../features/slices/cartSlice";
import "./cart.css";
import { Link } from "react-router-dom";
import PayButton from "../../Components/PayButton/PayButton";
import { calculateTotalPriceWithTax } from "../../utils/calculateTotalPriceWithTax";

const SHIPPING_PRICE = 25;
const TAX_RATE = 5 / 100;

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
      className={`shopping-cart`}
    >
      {cartItems.length > 0 ? (
        <>
          <div
            className="shopping-cart-items"
            style={
              lang === "en" ? { alignItems: "start" } : { alignItems: "end" }
            }
          >
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
                    {lang === "en" ? "Price: " : "السعر: "}
                    {book.price}
                    {lang == "en" ? " AED" : " درهم"}
                  </p>
                  <p dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang === "en"
                      ? `Author: ${book.enAuthor}`
                      : `المؤلف: ${book.arAuthor}`}
                  </p>
                  {/* {book.numberOfPages === 1 ? null : (
                    <p dir={lang === "en" ? "ltr" : "rtl"}>
                      {lang === "en" ? "Pages: " : "الصفحات: "}{" "}
                      {book.numberOfPages}
                    </p>
                  )} */}
                  <p className="quantity" dir={lang === "en" ? "ltr" : "rtl"}>
                    {lang === "en" ? "َQuantity: " : "الكمية: "}{" "}
                    <button
                      onClick={() => {
                        dispatch(addToCart(book));
                        dispatch(getTotal());
                      }}
                    >
                      +
                    </button>
                    <span className="countQuantity">{book.quantity}</span>{" "}
                    <button
                      onClick={() => {
                        dispatch(deleteFromCart(book));
                        dispatch(getTotal());
                      }}
                    >
                      -
                    </button>
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
          <form className="shopping-cart-info">
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
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                {cartTotalPrice}
                {lang == "en" ? " AED" : " درهم"}
              </span>
            </p>
            <p
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en" ? "Shipping" : "مصاريف الشحن"}
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                {cartItems?.length > 0 ? SHIPPING_PRICE : 0}{" "}
                {lang == "en" ? " AED" : " درهم"}
              </span>
            </p>
            <p
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en" ? "Taxes" : "الضريبة المضافة"}
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                {cartItems?.length > 0
                  ? (cartTotalPrice * TAX_RATE).toFixed(2) < 1
                    ? 1
                    : (cartTotalPrice * TAX_RATE).toFixed(2)
                  : 0}{" "}
                {lang == "en" ? " AED" : " درهم"}
              </span>
            </p>
            <h3
              style={
                lang === "en"
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
              }
            >
              {lang === "en" ? "Total Amount" : "المبلغ الكلي"}{" "}
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                {(calculateTotalPriceWithTax(cartTotalPrice) + SHIPPING_PRICE).toFixed(2)}
                {lang == "en" ? " AED" : " درهم"}
              </span>
            </h3>
            <PayButton cartItems={cartItems} />
          </form>
        </>
      ) : (
        <div
          style={
            lang === "en"
              ? { flexDirection: "row" }
              : { flexDirection: "row-reverse" }
          }
          className="empty-cart"
        >
          <h1 className="empty-heading">
            {" "}
            {lang === "en" ? (
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                Cart is Empty{" "}
                <Link className="shopping-cart-link" to="/books">
                  Go Add a Book to Buy
                </Link>
              </span>
            ) : (
              <span dir={lang === "en" ? "ltr" : "rtl"}>
                العربة فارغة{" "}
                <Link className="shopping-cart-link" to="/books">
                  اذهب لاضافة بعض الكتب للشراء
                </Link>
              </span>
            )}
          </h1>
          <img
            src="https://res.cloudinary.com/dxfphp6to/image/upload/v1701211606/nabdu_al_qalam/empty_cart_qtnlwu.svg"
            width={400}
            height={330}
            alt="empty_cart"
          />
        </div>
      )}
    </section>
  );
};

export default Cart;
