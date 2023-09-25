import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <h1>Useful Links</h1>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>Need Help ?</li>
        <li>Terms Of Use</li>
      </ul>
      <ul>
        <li>
          <h1>For Questions</h1>
        </li>
        <li>FQA</li>
        <li>Our Services</li>
      </ul>
      <ul>
        <li>
          <h1>Contact Info</h1>
        </li>
        <li className="info">
          <FaLocationDot /> United Arab Emirates
        </li>
        <li className="info">
          <FaPhoneAlt /> +971551886228
        </li>
        <li className="info">
          <FaEnvelope /> N.alqalam.p.d@gmail.com
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
