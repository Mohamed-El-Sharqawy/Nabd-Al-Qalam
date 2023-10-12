import TopNav from "./TopNav/TopNav";
import MiddNav from "./MiddNav/MiddNav";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header ref={headerRef}>
      <TopNav />
      <MiddNav headerRef={headerRef} />
    </header>
  );
};

export default Header;
