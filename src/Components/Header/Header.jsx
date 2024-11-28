import TopNav from "./TopNav/TopNav";
import SearchBar from "./SearchBar/SearchBar";
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
      <SearchBar />
      <BottomNav headerRef={headerRef} />
    </header>
  );
};

export default Header;
