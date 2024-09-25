import styled from 'styled-components';


export const ImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  

`;

export const StyledHeroTitle = styled.h1`
  font-size: 59px;
  line-height: 1.5em;
  color: #2B231D;
  max-width: 900px;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin-left: 48px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 8px;
  }
`;

export const StyledImage = styled.img`
   margin-bottom: 57px;
   width: 250px;
   height: 100%;

   @media (max-width: 768px) {
      display: none;
      background-image: url('./../../../assets/mobilehero-line.svg')
    
  }
`;

export const StyledImage2 = styled.img`
   width: 510px;
   height: 100%;
   margin-left: -40%;

   @media (max-width: 768px) {
    display: none;
  }
`;
