import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const MobileMenu = ({ setIsMenuHidden, isMenuHidden }) => {
  const handleClick = () => {
    setIsMenuHidden(true);
  };

  return (
    <ul className={`mobile-menu ${isMenuHidden ? "hide-menu" : "show-menu"}`}>
      <CloseIcon onClick={handleClick} className="close-btn" />
      <Link onClick={handleClick} to={"/"}>
        Home
      </Link>
      <Link onClick={handleClick} to={"/about"}>
        About
      </Link>
      <Link onClick={handleClick} to="/contact">
        Contact
      </Link>
      <Link
        onClick={handleClick}
        to="/shopping-cart"
        className="mobile-nav-link"
      >
        Cart
        <ShoppingBagOutlinedIcon />
      </Link>
      <Link onClick={handleClick} to="/login" className="mobile-nav-link">
        Login
        <PersonIcon />
      </Link>
    </ul>
  );
};

export default MobileMenu;
