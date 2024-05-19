import LowerHeader from "./LowerHeader";
import MidHeader from "./MidHeader";
import TopHeader from "./TopHeader";
import "./header.css";

const Header = ({ menuClicked, setMenuClicked }) => {
  return (
    <header>
      <TopHeader menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <MidHeader />
      <LowerHeader menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
};

export default Header;
