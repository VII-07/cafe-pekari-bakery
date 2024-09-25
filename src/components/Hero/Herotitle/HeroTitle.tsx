import React from 'react';
import { StyledHeroTitle, ImageContainer, StyledImage, StyledImage2 } from './HeroTitle.styled';
import Image1 from '../../../assets/linehero.svg';  
import Image2 from '../../../assets/Vector.svg';

const HeroTitle: React.FC = () => {
  return (
    <div>  
    <ImageContainer>
        <StyledImage src={Image1} alt="Фото 1" />
      </ImageContainer>

      <StyledHeroTitle>
        Кава та круасани — ідеальна пара для вашого ранку.
      </StyledHeroTitle>

      <ImageContainer>
        <StyledImage2 src={Image2} alt="Фото 2" />
      </ImageContainer>
    </div>
  );
};

export default HeroTitle;


