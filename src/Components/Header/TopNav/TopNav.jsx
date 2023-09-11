<<<<<<< HEAD
import "./topnav.css";
import { FiPhoneCall } from "react-icons/Fi";
import { FiMail } from "react-icons/Fi";

const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container-nav">
          <div className="contact">
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
=======
import './topnav.css'
import { FiPhoneCall } from 'react-icons/Fi'
import { FiMail } from 'react-icons/Fi'

const TopNav = () => {
    return (
        <>
            <div className="topnav">
                <div className="container-topnav">
                    <div className="contact">
                        <p> +971504880044 <FiPhoneCall /></p>
                    </div>
                    <div className="mail">
                        <a href="#">sales@nabdualqalam.ae <FiMail /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav
>>>>>>> 0a3d97895db48b85c1dfec4729ec437316ff60d8
