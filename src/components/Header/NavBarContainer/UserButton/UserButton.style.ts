import styled from "styled-components";
import { HEADER_BACKGROUND_COLOR } from "../../../../style/colors";

export const UserButtonStyled = styled.button`
    background: ${HEADER_BACKGROUND_COLOR};
    border: 3px solid #F6EBDA;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    margin-left: 37px;
    padding: 5px 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    display: none;
  }
    img{
        width: 25px;
        height: 25px;
    }

`