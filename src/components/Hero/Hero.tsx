import React from 'react';
import HeroTitle from './Herotitle/HeroTitle';
import BakeryImg from './HeroBakery/BakeryImg';
import { HeroContainer } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle /> 
      <BakeryImg />  
    </HeroContainer>
  );
};

export default Hero;


