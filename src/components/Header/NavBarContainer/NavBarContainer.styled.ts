import styled from "styled-components";

export const NavBarContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 22px;
  padding-left: 22px;
  @media (max-width: 768px) {
    display: row;
    flex-direction: row-reverse;
    justify-content: space-around;
    flex-grow: 1;
    padding: 0;
  }
`;
