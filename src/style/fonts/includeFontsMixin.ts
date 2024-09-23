import { css } from "styled-components";

export const includeUnderDog = (
  fontWeight = "normal",
  fontSize = "16px"
) => css`
  font-family: "Underdog", system-ui;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
export const includeMontserrat = (
  fontWeight = "normal",
  fontSize = "16px"
) => css`
  font-family: "Montserrat", sans-serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
export const includePlayfairDisplay = (
  fontWeight = "normal",
  fontSize = "16px"
) => css`
  font-family: "Playfair Display", serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
export const includeMontserratAlternates = (
  fontWeight = "normal",
  fontSize = "16px"
) => css`
font-family: "Montserrat Alternates", sans-serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
export const includeInter = (fontWeight = "normal", fontSize = "16px") => css`
  font-family: "Inter", serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
export const includePoppins = (fontWeight = "normal", fontSize = "16px") => css`
  font-family: "Poppins", sans-serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;
