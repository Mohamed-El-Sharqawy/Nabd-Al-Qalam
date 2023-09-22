import "./middnav.css";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { switchLang } from "../../../features/slices/langSlice";
import { useEffect, useState } from "react";

const MiddNav = () => {
  const [headerScroll, setHeaderScroll] = useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const handleLangSwitch = () => {
    dispatch(switchLang());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 178) {
        setHeaderScroll("middnav-scroll");
      } else {
        setHeaderScroll("");
      }
    });
  }, []);

  return (
    <div className={`middnav ${headerScroll}`}>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="container-midd"
      >
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
        <div
          style={
            lang === "en"
              ? { flexDirection: "row" }
              : { flexDirection: "row-reverse" }
          }
          className="cart"
        >
          <Link to="/shopping-cart">
            <HiOutlineShoppingBag />
            <span style={lang == 'en' ? {left: "16px"} : {right: "-6px"}} className="count">{cartItems?.length || 0}</span>
          </Link>
          {/* <Link to={"/login"}>
              <BsFillPersonCheckFill />
            </Link> */}
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
  );
};

export default MiddNav;
