import styled from "styled-components";
import { HEADER_BTN_COLOR } from "../../../style/colors";
import { includeMontserrat } from "../../../style/fonts/includeFontsMixin";

export const NavBarComponent = styled.nav`
`;
export const UlListComponent = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const LiListComponent = styled.li`
  margin-right: 73px;
  a {
    ${includeMontserrat('22px','300')}
    text-decoration: none;
    color: ${HEADER_BTN_COLOR};
  }
`;
