import "./middnav.css";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { BsFillPersonCheckFill } from "react-icons/Bs";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const MiddNav = () => {
  return (
    <>
      <div className="middnav">
        <div className="container-midd">
          <div className="logo">
            <a href="#">
              <img src="/src/assets/Logo_1.jpg" alt="" />
            </a>
          </div>
          <div className="leftlinks-search">
            <ul className="links-search">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="cart">
            <Link to={"/shopping-cart"}>
              <HiOutlineShoppingBag />
              <span className="count">0</span>
            </Link>
            <Link to={"/login"}>
              <BsFillPersonCheckFill />
            </Link>
            <button className="lang-btn">
              <img src="/src/assets/uae.jpg" alt="" />
            </button>
          </div>
          <div className="menu">
            <BiMenu className="menu-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddNav;
