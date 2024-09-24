import { UserButtonStyled } from "./UserButton.style";
import UserButtonIcon from '../../../../assets/Group 41.svg';

const UserButton = () => {
    return ( 
        <UserButtonStyled>
            <img src={UserButtonIcon} alt="userIcon" />
        </UserButtonStyled>
     );
}
 
export default UserButton;