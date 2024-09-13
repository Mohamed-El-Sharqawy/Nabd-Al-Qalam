import { useSelector } from "react-redux";
import "./payButton.css";
import { Link } from "react-router-dom";

export default function PayButton() {
  const { lang } = useSelector((state) => state.lang);

  return (
    <Link to={"/payment"}>
      <button type="button" className="pay-button">
        {lang == "en" ? " Go to Checkout" : "اذهب للدفع الأن"}
      </button>
    </Link>
  );
}
