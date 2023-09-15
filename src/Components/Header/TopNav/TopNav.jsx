import "./topnav.css";
import { FiPhoneCall } from "react-icons/Fi";
import { FiMail } from "react-icons/Fi";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
          <div className="contact-paragraph">
            <Link to={"tel:+971504880044"}>
              +971504880044 <FiPhoneCall />
            </Link>
          </div>
          <div className="mail">
            <Link to={"mailto:sales@nabdualqalam.ae"}>
              sales@nabdualqalam.ae <FiMail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
