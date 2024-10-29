import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header
      style={
        window.location.href.includes("terms-and-conditions")
          ? {
              borderBottom: `1px solid #c0114c`,
            }
          : {}
      }
      ref={headerRef}
    >
      <TopNav />
      <BottomNav headerRef={headerRef} />
    </header>
  );
};

export default Header;
