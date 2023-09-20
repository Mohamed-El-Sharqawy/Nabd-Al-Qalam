import "./middnav.css";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { BsFillPersonCheckFill } from "react-icons/Bs";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { switchLang } from "../../../features/slices/langSlice";

const MiddNav = () => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const handleLangSwitch = () => {
    dispatch(switchLang());
  };

  return (
    <>
      <div className="middnav">
        <div className="container-midd">
          <div className="logo">
            <Link to="/">
              <img src="/src/assets/Logo_1.jpg" alt="logo" />
            </Link>
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
            <Link to="/shopping-cart">
              <HiOutlineShoppingBag />
              <span className="count">0</span>
            </Link>
            <Link to={"/login"}>
              <BsFillPersonCheckFill />
            </Link>
            <button className="lang-btn" onClick={handleLangSwitch}>
              {lang === "en" ? (
                <img src="/src/assets/uae.jpg" alt="uae-flag" />
              ) : (
                <img src="/src/assets/uk.png" alt="uae-flag" />
              )}
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
