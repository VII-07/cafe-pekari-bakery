import styled from "styled-components";


export const CartButtonStyled = styled.button`
  background: #F6EBDA;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  // Стиль для показу кількості товарів у кошику
  .cart-count {
    position: absolute;
    top: -8px;
    left: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 8px;
    font-size: 12px;
  }
`;