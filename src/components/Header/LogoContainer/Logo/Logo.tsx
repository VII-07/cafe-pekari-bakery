import { LogoStyled } from "./Logo.styled";
import LogoImg from "../../../../assets/logo.svg";

const Logo = () => {
    return ( 
        <LogoStyled src={LogoImg} alt="logo"/>
     );
}
 
export default Logo;