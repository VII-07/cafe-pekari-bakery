import React from 'react';
import { StyledBakeryImg } from './Bakery.styled'; 
import BakeryImage from "../../../assets/croisant.jpg"; 


const BakeryImg: React.FC = () => {
  return (
    <StyledBakeryImg src={BakeryImage} alt="Зображення пекарні" />
  );
};

export default BakeryImg;