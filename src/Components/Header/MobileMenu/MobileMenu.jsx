import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/contact"></Link>
    </ul>
  );
};

export default MobileMenu;
