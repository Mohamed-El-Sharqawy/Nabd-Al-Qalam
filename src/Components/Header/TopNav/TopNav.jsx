import "./topnav.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
<<<<<<< HEAD
          <div className="contact-paragraph">
            <Link to={"tel:+971551886228"}>
              +971551886228
              <FiPhoneCall />
            </Link>
          </div>
          <div className="mail">
            <Link to={"mailto:N.alqalam.p.d@gmail.com"}>
              N.alqalam.p.d@gmail.com
              <FiMail />
            </Link>
          </div>
=======
          <Link className="contact-paragraph" to={"tel:+971504880044"}>
            +971504880044 <LocalPhoneIcon />
          </Link>
          <Link className="mail" to={"mailto:sales@nabdualqalam.ae"}>
            sales@nabdualqalam.ae <MailIcon />
          </Link>
>>>>>>> 7eec79ebd3519277647ba895214215ef4ae843df
        </div>
      </div>
    </>
  );
};

export default TopNav;
