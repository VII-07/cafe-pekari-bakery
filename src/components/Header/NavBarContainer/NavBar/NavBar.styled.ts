import styled from "styled-components";
import {
  HEADER_BTN_ACTIVE_COLOR,
  HEADER_BTN_COLOR,
} from "../../../../style/colors";
import { includeMontserrat } from "../../../../style/fonts/includeFontsMixin";
import { Link } from "react-router-dom";
import CoffeMenuBackground from '../../../../assets/Group 696.png';

export const NavBarComponent = styled.nav`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UlListComponent = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    background-image: url(${CoffeMenuBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")}; 
    width: 100%;
    background-color: #f8f8f8;
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 1;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const LiListComponent = styled.li`
  margin-right: 37px;
  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  ${includeMontserrat("300", "14px")}
  text-decoration: none;
  color: ${({ isActive }) =>
    isActive ? HEADER_BTN_ACTIVE_COLOR : HEADER_BTN_COLOR};
  font-weight: ${({ isActive }) => (isActive ? 500 : 300)};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${HEADER_BTN_ACTIVE_COLOR};
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 800;
  }
`;

// Стиль для мобільної іконки з анімацією
export const MobileMenuIcon = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  border: 2px solid black;
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease-in-out; 
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")}; /* Поворот іконки при відкритті/закритті */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #f8f8f8;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 1;
`;
