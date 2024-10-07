import styled from "styled-components";
import { includeMontserrat, includeMontserratAlternates } from "../../../../../style/fonts/includeFontsMixin";

export const FavoriteCardStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 30%;
  position: relative;
  ${includeMontserratAlternates('normal')}

  .badges {
    display: flex;
    gap: 10px;
    position: absolute;
    top: 15px;
    left: 20px;

    span {
      background-color: #FF6B00;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 700;
    }

    .discount {
      background-color: #FF3D3D;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin: 10px 0;
    color: #333;
  }

  .description {
    font-size: 14px;
    color: #7D7D7D;
    margin-bottom: 20px;
  }

  .details {
    margin-bottom: 20px;
    span {
      font-size: 14px;
      color: #7D7D7D;
    }
    p{
        ${includeMontserrat('300', '15px')}
        width: 100%;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid #AD3A20;
        margin-top: 6px;
        margin-bottom: 12px;
    }
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;

    .old-price {
      text-decoration: line-through;
      color: #7D7D7D;
      white-space: nowrap;
      font-size: 16px;
    }

    .new-price {
      font-size: 18px;
      white-space: nowrap;
      color: black;
    }
  }

  button {
    background-color: #4D2C26;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 50px;
    width: 70%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
