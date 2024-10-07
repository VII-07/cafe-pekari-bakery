import { MainContainerStyled } from "./MainContainer.style";

type MainContainerType = {
    children: React.ReactNode;
}

const MainContainer = ({children} : MainContainerType) => {
    return ( 
        <MainContainerStyled>
            {children}
        </MainContainerStyled>
     );
}
 
export default MainContainer;