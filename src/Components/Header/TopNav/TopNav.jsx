import "./topnav.css";
import { FiPhoneCall } from "react-icons/Fi";
import { FiMail } from "react-icons/Fi";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
          <div className="contact-paragraph">
            <p>
              +971504880044 <FiPhoneCall />
            </p>
          </div>
          <div className="mail">
            <p>
              sales@nabdualqalam.ae <FiMail />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
