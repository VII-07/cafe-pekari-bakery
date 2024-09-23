import { HEADER_BACKGROUND_COLOR } from './../../style/colors';
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${HEADER_BACKGROUND_COLOR};
    .logo__container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav_bar_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`