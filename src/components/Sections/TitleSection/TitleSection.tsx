import { TitleSectionStyled } from "./TitleSection.styled";

type TitleSectionType = {
    text: string;
}

const TitleSection = ({text} : TitleSectionType) => {
    return ( 
        <TitleSectionStyled>{text}</TitleSectionStyled>
     );
}
 
export default TitleSection;