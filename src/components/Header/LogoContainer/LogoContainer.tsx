import { LogoContainerStyled } from "./LogoContainer.styled";
import Logo from "./Logo/Logo"
import LogoText from "./LogoText/LogoText";

const LogoContainer = () => {
    return ( 
        <LogoContainerStyled>
            <Logo />
            <LogoText />
        </LogoContainerStyled>
     );
}
 
export default LogoContainer;