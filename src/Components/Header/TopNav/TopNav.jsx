import "./topnav.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
          <Link className="contact-paragraph" to={"tel:+971504880044"}>
            +971504880044 <LocalPhoneIcon />
          </Link>
          <Link className="mail" to={"mailto:sales@nabdualqalam.ae"}>
            sales@nabdualqalam.ae <MailIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNav;
