import FavoritDay from "../components/Sections/FavoritDay/FavoritDay";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <FavoritDay/>
      </MainContainer>
    </>
  );
};

export default MainPage;
