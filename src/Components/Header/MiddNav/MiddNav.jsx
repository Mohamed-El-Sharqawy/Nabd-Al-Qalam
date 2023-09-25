import "./middnav.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { switchLang } from "../../../features/slices/langSlice";
import { useEffect, useState } from "react";
import { logout } from "../../../features/slices/authSlice";
import MobileMenu from "../MobileMenu/MobileMenu";

const MiddNav = () => {
  const [headerScroll, setHeaderScroll] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);
  const { lang } = useSelector((state) => state.lang);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLangSwitch = () => {
    dispatch(switchLang());
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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
            <ShoppingBagOutlinedIcon />
            <span
              style={lang == "en" ? { left: "16px" } : { right: "-6px" }}
              className="count"
            >
              {cartItems?.length || 0}
            </span>
          </Link>
          {!user?._id ? (
            <Link to={"/login"}>
              <PersonIcon />
            </Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
          <button className="lang-btn" onClick={handleLangSwitch}>
            {lang === "en" ? (
              <img src="/src/assets/uae.jpg" alt="uae-flag" />
            ) : (
              <img src="/src/assets/uk.png" alt="uk-flag" />
            )}
          </button>
        </div>
        <div className="menu">
          <MenuOutlinedIcon
            onClick={() => setIsMenuHidden(false)}
            className="menu-icon"
          />
        </div>
      </div>
      <MobileMenu
        setIsMenuHidden={setIsMenuHidden}
        isMenuHidden={isMenuHidden}
      />
    </div>
  );
};

export default MiddNav;
