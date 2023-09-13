import { useRef } from "react";
import "./contact-form.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

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
    <div className="contact">
      {/* Left Side */}
      <form className="left-side" onSubmit={sendEmail} ref={form}>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" name="from_name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea type="text" placeholder="Message" name="message" />
        <button>Submit</button>
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
  );
};

export default ContactForm;
