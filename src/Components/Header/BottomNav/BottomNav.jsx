import "./bottomNav.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { switchLang } from "../../../features/slices/langSlice";
import { useEffect, useState } from "react";
import { logout } from "../../../features/slices/authSlice";
import MobileMenu from "../MobileMenu/MobileMenu";
const BottomNav = ({ headerRef }) => {
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
    const displayGoTopButton = () => {
      if (window.scrollY >= headerRef?.current.clientHeight) {
        setHeaderScroll("bottomnav-scroll");
      } else {
        setHeaderScroll("");
      }
    };

    window.addEventListener("scroll", displayGoTopButton);
    return () => window.removeEventListener("scroll", displayGoTopButton);
  }, [headerRef]);

  return (
    <div className={`bottomnav ${headerScroll}`}>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="container-midd"
      >
        <div className="logo">
          <NavLink className={"active"} to="/">
            <img
              width={80}
              height={80}
              src={
                "https://res.cloudinary.com/dxfphp6to/image/upload/v1697903938/nabdu_al_qalam/logo_chdt9x.jpg"
              }
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="leftlinks-search">
          <ul
            className="links-search"
            style={
              lang == "en"
                ? { flexDirection: "row" }
                : { flexDirection: "row-reverse" }
            }
          >
            <li>
              <Link to="/"> {lang == "en" ? "Home" : "الصفحة الرئيسية"} </Link>
            </li>
            <li>
              <Link to="/books">
                {" "}
                {lang == "en" ? "Buy Now" : "اشتري الأن"}{" "}
              </Link>
            </li>
            <li>
              <Link to="/about">{lang == "en" ? "About" : "من نحن"}</Link>
            </li>
            <li>
              <Link to="/contact">
                {lang == "en" ? "Contact" : "تواصل معنا"}
              </Link>
            </li>
            <li>
              <Link to="/popular">
                {lang == "en" ? "Most Popular" : "الأكثر مبيعا"}
              </Link>
            </li>
            {user.isAdmin && (
              <li>
                <Link to="/add-books">
                  {lang == "en" ? "Add Books" : "اضف بعض الكتب"}
                </Link>
              </li>
            )}
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
              className="count"
              style={lang === "en" ? { left: "15px" } : { right: "-10px" }}
            >
              {cartItems?.length || 0}
            </span>
          </Link>
          {!user?._id ? (
            <Link title="login" to={"/login"}>
              <PersonIcon />
            </Link>
          ) : (
            <button title="logout" className="auth-btn" onClick={handleLogout}>
              {lang == "en" ? "LOGOUT" : "تسجيل خروج"}
            </button>
          )}
          <button className="lang-btn" onClick={handleLangSwitch}>
            {lang === "en" ? (
              <img
                src={
                  "https://res.cloudinary.com/dxfphp6to/image/upload/v1697903939/nabdu_al_qalam/uae_lfhvbc.jpg"
                }
                width={30}
                height={30}
                alt="UAE-flag"
              />
            ) : (
              <img
                src={
                  "https://res.cloudinary.com/dxfphp6to/image/upload/v1697903939/nabdu_al_qalam/uk_twgwxa.png"
                }
                width={30}
                height={30}
                alt="UK-flag"
              />
            )}
          </button>
        </div>
        <div className="menu">
          <MenuOutlinedIcon
            onClick={() => setIsMenuHidden(false)}
            className="menu-icon"
          />
          <Link to="/shopping-cart" className="mobile-nav-link">
            <ShoppingBagOutlinedIcon />
            <span className="cart-items-length">
              {cartItems?.length}
            </span>
          </Link>
        </div>
      </div>

      <MobileMenu
        setIsMenuHidden={setIsMenuHidden}
        isMenuHidden={isMenuHidden}
      />
    </div>
  );
};

export default BottomNav;
