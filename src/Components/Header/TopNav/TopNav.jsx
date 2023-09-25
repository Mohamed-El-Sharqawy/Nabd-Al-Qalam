import "./topnav.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
          <Link className="contact-paragraph" to={"tel:+971551886228"}>
            <span>Sales</span>+971551886228 <LocalPhoneIcon />
          </Link>
          <Link className="owner" to={"tel:+971504628464"}>
            <span>Managing director</span>
            +971504628464 <LocalPhoneIcon />
          </Link>
          <Link className="mail" to={"mailto:N.alqalam.p.d@gmail.com"}>
            N.alqalam.p.d@gmail.com <MailIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNav;
