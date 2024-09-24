import CartButton from "./CartButton/CartButton";
import NavBar from "./NavBar/NavBar";
import { NavBarContainerStyled } from "./NavBarContainer.styled";
import UserButton from "./UserButton/UserButton";

const NavBarContainer = () => {
    return ( 
        <NavBarContainerStyled>
            <NavBar/>
            <CartButton/>
            <UserButton/>
        </NavBarContainerStyled>
     );
}
 
export default NavBarContainer;