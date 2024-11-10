import { useSelector } from "react-redux";
import "./payButton.css";
import axios from "axios";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function PayButton({ cartItems }) {
  const { lang } = useSelector((state) => state.lang);
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayButton = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      cartItems,
      userId: user._id,
    };

    axios
      .post("https://nabdalqalam-backend.onrender.com/create-checkout-session", data)
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err.message);
        toast.error("Please Try Again Later", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "pay-button-error-toast",
        });
        setIsLoading(false);
      });
  };

  return (
    <button style={isLoading ? {
      backgroundColor: "#ebb875"
    } : undefined} onClick={handlePayButton} type="button" className="pay-button">
      {isLoading ? (
        <ClipLoader size={18} />
      ) : lang == "en" ? (
        " Go to Checkout"
      ) : (
        "اذهب للدفع الأن"
      )}
    </button>
  );
}
