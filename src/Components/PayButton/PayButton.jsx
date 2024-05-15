import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./payButton.css";
import { Link } from "react-router-dom";

export default function PayButton({ cartItems }) {
  const [isLoading, setIsLoading] = useState(false);
  const { lang } = useSelector((state) => state.lang);
  const { user } = useSelector((state) => state.auth);

  const handleCheckout = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      cartItems,
      userId: user._id,
    };

    axios
      .post(
        `${"https://comfortable-duck-pants.cyclic.app/create-checkout-session"}`,
        data
      )
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  };

  return (
    <button type="button" className="pay-button">
      <Link to={"/payment"}>
        {isLoading ? (
          <span className="loader"></span>
        ) : lang == "en" ? (
          " Go to Checkout"
        ) : (
          "اذهب للدفع الأن"
        )}
      </Link>
    </button>
  );
}
