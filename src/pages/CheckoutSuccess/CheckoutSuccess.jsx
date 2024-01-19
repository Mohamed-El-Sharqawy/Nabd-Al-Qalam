import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./checkoutSuccess.css";

export default function CheckoutSuccess() {
  const { lang } = useSelector((state) => state.lang);

  return (
    <section
      style={
        lang === "en"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      className="checkout-success"
    >
      <div>
        <h1>
          {lang === "en" ? "Thank Your for Ordering" : "شكرا لطلبك من متجرنا"}
        </h1>
        <Link className="main-btn" to="/books">
          {lang === "en" ? "Explore More" : "اكتشف المزيد"}
        </Link>
      </div>
      <div>
        <img
          src={
            "https://res.cloudinary.com/dxfphp6to/image/upload/v1705699287/nabdu_al_qalam/checkout-success_uc678b.svg"
          }
          width={400}
          height={400}
          alt="Checkout Success Image"
        />
      </div>
    </section>
  );
}
