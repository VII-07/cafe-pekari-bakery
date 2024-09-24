import { HeaderStyled } from "./Header.styled";
import LogoContainer from "./LogoContainer/LogoContainer";
import NavBarContainer from "./NavBarContainer/NavBarContainer";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer/>
      <NavBarContainer/>
    </HeaderStyled>
  );
};

export default Header;
