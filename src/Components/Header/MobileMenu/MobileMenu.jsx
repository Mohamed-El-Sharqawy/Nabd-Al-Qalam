import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/shopping-cart" className="mobile-nav-link">
        Cart
        <ShoppingBagOutlinedIcon />
      </Link>
      <Link to="/login" className="mobile-nav-link">
        Login
        <PersonIcon />
      </Link>
    </ul>
  );
};

export default MobileMenu;
