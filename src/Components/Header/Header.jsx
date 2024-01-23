import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header ref={headerRef}>
      <TopNav />
      <BottomNav headerRef={headerRef} />
    </header>
  );
};

export default Header;
