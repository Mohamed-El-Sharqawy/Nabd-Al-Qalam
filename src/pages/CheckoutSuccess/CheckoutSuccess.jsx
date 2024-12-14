import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./checkoutSuccess.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CheckoutSuccess() {
  const { lang } = useSelector((state) => state.lang);
  const [searchParams] = useSearchParams();
  const { clearCart, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getEmailMessage = ({ from_name, email, subject, message } = {}) => {
      return `
          <p>You have received a new message from your contact form website:</p>
          <div style="background-color: #fbfbfb; color: #222; padding: 12px">
              <p style="margin: 0;">Name: ${from_name}</p>
              <p style="margin: 12px 0;">Email: ${email}</p>
              <p style="margin: 0 0 12px;">Subject: ${subject}</p>
              <p style="margin: 0;">Message: ${message}</p>
              <p style="margin: 0 0 12px;">Date: ${new Date().toLocaleString()}</p>
              <p style="margin: 0;">Books:</p>
              ${cartItems
                .map(
                  (book) => `
                <div style="margin-top: 1rem; display: flex; align-items: center; ">
                  <img src="${book.img}" style="width: 75px; height: 75px; margin-right: 0.75rem;" />
                  <div>
                    <p>AED${book.arTitle} - ${book.price}</p>
                    <p>${book.quantity}X</p>
                  </div>
                </div>
              `
                )
                .join("")}
          </div>
      `;
    };

    const getSession = async () => {
      const sessionId = searchParams.get("session_id");
      const res = await fetch(
        `https://nabdalqalam-backend.onrender.com/check-session?session_id=${sessionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (data.payment_status == "paid") {
        const emailMessage = getEmailMessage({
          from_name: data.customer_details.name,
          email: data.customer_details.email,
          subject: "Payment Success",
          message: `a Customer Purchased a Book From Your Store, Total Price: ${
            data.amount_total / 100
          }AED`,
        });

        const res = await fetch(
          "https://sendmail-api-docs.vercel.app/api/send",
          {
            method: "POST",
            body: JSON.stringify({
              to: "N.alqalam.p.d@gmail.com",
              subject: "Payment Success",
              message: emailMessage,
            }),
          }
        );

        const res2 = await fetch(
          "https://sendmail-api-docs.vercel.app/api/send",
          {
            method: "POST",
            body: JSON.stringify({
              to: "dev.elbehery@gmail.com",
              subject: "Payment Success",
              message: emailMessage,
            }),
          }
        );

        const email = await res.json();
        const email2 = await res2.json();

        if (email?.success && email2?.success) {
          toast.success("Thank You for Contacting Us 🎉", {
            toastId: "contact_success_message",
          });
        } else {
          toast.success("Something Went Wrong Please Retry Again !", {
            toastId: "contact_fail_message",
          });
        }
      }
    };

    getSession();
  }, [searchParams, dispatch, cartItems, clearCart]);

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
