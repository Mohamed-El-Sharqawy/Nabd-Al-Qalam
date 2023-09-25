import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import "./contact-form.css";

const ContactForm = () => {
  const form = useRef();
  const { lang } = useSelector((state) => state.lang);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mgmott9",
        "template_qplsioj",
        form.current,
        "7ayvEk0J2UudqMQ8m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="heading">
        <h1>{lang === "en" ? "Contact Us" : "تواصل معنا"}</h1>
      </div>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="contact"
      >
        {/* Left Side */}
        <form
          dir={lang === "en" ? "ltr" : "rtl"}
          className="left-side"
          onSubmit={sendEmail}
          ref={form}
        >
          <input
            type="text"
            placeholder={lang === "en" ? "Name" : "الاسم"}
            name="from_name"
          />
          <input
            type="email"
            placeholder={lang === "en" ? "Email" : "البريد الألكتروني"}
            name="email"
          />
          <input
            type="text"
            placeholder={lang === "en" ? "Subject" : "الموضوع"}
            name="subject"
          />
          <textarea
            type="text"
            placeholder={lang === "en" ? "Message" : "الرسالة"}
            name="message"
          />
          <button>{lang === "en" ? "Submit" : "ارسل"}</button>
        </form>
        {/* Right Side */}
        <div className="right-side">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57684.26988505684!2d55.391799!3d25.362371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a3b0636b9b9%3A0x9807be7e0f780fb5!2sSharjah%20Museum%20of%20Islamic%20Civilization!5e0!3m2!1sen!2sus!4v1694440989752!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
