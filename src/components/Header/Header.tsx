import { HeaderStyled } from "./Header.style";
import Logo from "./Logo/Logo";
import LogoText from "./LogoText/LogoText";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo__container">
        <Logo />
        <LogoText />
      </div>
      <div className="nav_bar_container">
        <NavBar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
