import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./payment.css";

export default function Payment() {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  // Delivery Address
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();

  useEffect(() => {
    const items = cartItems.map((item) => ({
      name: item.arTitle,
      unitprice: item.price,
      quantity: item.quantity,
      linetotal: item.price * item.quantity,
    }));

    var payButton = document.getElementById("pay-button");
    var errorMessage = document.querySelector(".error-message");

    payButton.disabled = true;

    if (PaymenntJS) {
      PaymenntJS?.init({
        publicKey: "pk_sandbox_ba6fef65d126a7d60d318a4e68faba59",
        mode: PaymenntJS?.modes.TEST,
        onTokenized: async function (data) {
          console.log(cartTotalPrice);
          const response = await fetch(
            "https://comfortable-duck-pants.cyclic.app/paymentt-checkout",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Paymennt-Api-Key": "18d545c4bb995080",
                "X-Paymennt-Api-Secret":
                  "mer_18d09da3ed1fa21b933cb6fee103f21f92df1a1b24fef31ea408ddabcc7283dd",
              },
              body: JSON.stringify({
                source: {
                  type: "TOKEN",
                  token: data.token,
                  storeCardDetails: false,
                },
                checkoutDetails: {
                  requestId: "ORD-1234-r1s",
                  orderId: "ORD-123s4",
                  currency: "AED",
                  amount: cartTotalPrice + 10,
                  totals: {
                    subtotal: cartTotalPrice,
                    tax: 0,
                    shipping: 10,
                    handling: 0,
                    discount: 0,
                    skipTotalsValidation: false,
                  },
                  items: items,
                  customer: {
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    email: emailRef.current.value,
                    phone: phoneRef.current.value,
                  },
                  billingAddress: {
                    name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
                    address1: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    zip: zipCodeRef.current.value,
                    country: "AE",
                    set: true,
                  },
                  deliveryAddress: {
                    name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
                    address1: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    zip: zipCodeRef.current.value,
                    country: "AE",
                    set: true,
                  },
                  returnUrl: "https://nabdalqalam.com",
                },
                validReturnUrl: true,
              }),
            }
          );

          const result = await response.json();

          if (result.success) {
            if (result.result.status === "REDIRECT")
              window.location.href = result.result.redirectUrl;
          }
        },
        onTokenizationFailed: function (data) {
          errorMessage.innerText = data.error;
        },

        onValidationUpdate: function (data) {
          payButton.disabled = !data.valid;
          if (!data.valid) {
            var message = null;
            for (var i = 0; i < data.validationErrors.length; ++i) {
              var fieldValidation = data.validationErrors[i];
              if (!message || fieldValidation.field === data.lastActiveField) {
                message = fieldValidation.message;
              }
            }
            if (!message) {
              message = data.error ? data.error : "Invalid card details";
            }
            errorMessage.innerText = message;
          } else {
            errorMessage.innerText = "";
          }
        },
      });
    }

    payButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (PaymenntJS) {
        PaymenntJS?.submitPayment();
      }
    });
  }, [cartItems, cartTotalPrice]);

  return (
    <>
      <section className="payment-section">
        <div className="payment-inputs">
          <input
            className="paymentt-custom-input"
            placeholder="First name..."
            type="text"
            name="firstName"
            ref={firstNameRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="Last name..."
            type="text"
            name="lastName"
            ref={lastNameRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="Email..."
            type="email"
            name="email"
            ref={emailRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="Phone number..."
            type="tel"
            min={1}
            name="phoneNumber"
            ref={phoneRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="Address..."
            type="text"
            name="address"
            ref={addressRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="City..."
            type="text"
            name="city"
            ref={cityRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="State..."
            type="text"
            name="state"
            ref={stateRef}
          />
          <input
            className="paymentt-custom-input"
            placeholder="Zip Code..."
            type="number"
            min={5}
            name="zipCode"
            ref={zipCodeRef}
          />
        </div>
        <div id="paymennt-frame" className="card-frame">
          <p className="info-message"></p>
          <p className="error-message"></p>
        </div>

        <button id="pay-button" type="submit">
          Pay
        </button>
      </section>
    </>
  );
}
