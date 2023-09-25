import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchLang } from "../../../features/slices/langSlice";
import { uae, uk } from "../../../assets/Iamges";

const MobileMenu = ({ setIsMenuHidden, isMenuHidden }) => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsMenuHidden(true);
  };

  return (
    <ul className={`mobile-menu ${isMenuHidden ? "hide-menu" : "show-menu"}`}>
      <CloseIcon onClick={handleClick} className="close-btn" />
      <Link onClick={handleClick} to={"/"}>
        {lang === "en" ? "Home" : "الرئيسية"}
      </Link>
      <Link onClick={handleClick} to={"/about"}>
        {lang === "en" ? "About" : "من نحن"}
      </Link>
      <Link onClick={handleClick} to="/contact">
        {lang === "en" ? "Contact" : "تواصل معنا"}
      </Link>
      <Link
        onClick={handleClick}
        to="/shopping-cart"
        className="mobile-nav-link"
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        {lang === "en" ? "Shoppign Cart" : "العربة"}
        <ShoppingBagOutlinedIcon />
      </Link>
      <Link
        dir={lang === "en" ? "ltr" : "rtl"}
        onClick={handleClick}
        to="/login"
        className="mobile-nav-link"
      >
        {lang === "en" ? "Login" : "تسجيل الدخول"}
        <PersonIcon />
      </Link>
      <button
        dir={lang === "en" ? "ltr" : "rtl"}
        onClick={() => {
          dispatch(switchLang());
          handleClick();
        }}
        className="mobile-nav-lang mobile-nav-link"
      >
        <span>{lang === "en" ? "Switch Language" : "تغيير اللغة"}</span>
        {lang === "en" ? (
          <img src={uae} width={30} alt="uae-flag" />
        ) : (
          <img src={uk} width={30} alt="uae-flag" />
        )}
      </button>
    </ul>
  );
};

export default MobileMenu;
