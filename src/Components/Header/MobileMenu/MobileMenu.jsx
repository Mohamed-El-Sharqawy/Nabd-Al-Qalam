import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <Link to={"/"}>Home</Link>
      <Link to={"about"}>About</Link>
      <Link className="/contact">Contact</Link>
      <Link className="/contact"></Link>
    </ul>
  );
};

export default MobileMenu;
