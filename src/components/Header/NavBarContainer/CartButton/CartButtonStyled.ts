import styled from "styled-components";


export const CartButtonStyled = styled.button`
  background: #F6EBDA;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
  img{
    width: 30x;
    height: 30px;
  }
  // Стиль для показу кількості товарів у кошику
  .cart-count {
    position: absolute;
    top: -8px;
    left: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 3px 6px;
    font-size: 10px;
  }
`;