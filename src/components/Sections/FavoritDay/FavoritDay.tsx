import TitleSection from "../TitleSection/TitleSection";
import CardContainer from "./CardContainer/CardContainer";
import { FavoriteDayContainer } from "./FavoritDay.style";

const FavoritDay = () => {
    return ( 
        <FavoriteDayContainer>
            <TitleSection text="Фаворити дня"/>
            <CardContainer/>
        </FavoriteDayContainer>
     );
}
 
export default FavoritDay;