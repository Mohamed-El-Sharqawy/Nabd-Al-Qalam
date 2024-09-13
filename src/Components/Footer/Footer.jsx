import "./footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <h1>Useful Links</h1>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/activities"}>Activities</Link>
        </li>
        <li>
          <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
        </li>
      </ul>
      <ul>
        <li>
          <h1>Contact Info</h1>
        </li>
        <li className="info">
          <LocationOnIcon /> United Arab Emirates
        </li>
        <li className="info">
          <LocalPhoneIcon /> <Link to={"tel:+971551886228"}>+971551886228</Link>
        </li>
        <li className="info">
          <MailIcon /> <Link to={"mailto:N.alqalam.p.d@gmail.com"}>N.alqalam.p.d@gmail.com</Link>
        </li>
      </ul>
      <ul className="payment-methods">
        <li>
          <img
            width={75}
            height={75}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
            alt="mastercard logo"
          />
          <img
            width={75}
            height={75}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
            alt="visa logo"
          />
          <img
            width={75}
            height={75}
            src="https://cdn-icons-png.flaticon.com/512/196/196566.png"
            alt="paypal logo"
          />
          <img
            width={75}
            height={75}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png"
            alt="stripe logo"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
