import styled from "styled-components";
import {
  HEADER_BTN_ACTIVE_COLOR,
  HEADER_BTN_COLOR,
} from "../../../../style/colors";
import { includeMontserrat } from "../../../../style/fonts/includeFontsMixin";
import { Link } from "react-router-dom";

export const NavBarComponent = styled.nav``;
export const UlListComponent = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const LiListComponent = styled.li`
  margin-right: 37px;
`;
export const StyledLink = styled(Link)<{ isActive: boolean }>`
    ${includeMontserrat("300", "14px")}
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? HEADER_BTN_ACTIVE_COLOR : HEADER_BTN_COLOR)};
    font-weight: ${({ isActive }) => (isActive ? 500 : 300)};
    transition: color 0.2s ease-in-out;
  &:hover {
    color: ${HEADER_BTN_ACTIVE_COLOR};
    opacity: 0.9;
  }
`;