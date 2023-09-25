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
          <h1>Guides</h1>
        </li>
        <li>Shopping Guide</li>
        <li>Other Branches</li>
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
          <LocationOnIcon /> United Arab Emirates
        </li>
        <li className="info">
          <LocalPhoneIcon /> +971504880044
        </li>
        <li className="info">
          <MailIcon /> sales@nabdualqalam.ae
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
