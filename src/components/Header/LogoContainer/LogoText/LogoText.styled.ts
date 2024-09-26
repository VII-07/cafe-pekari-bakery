import styled from 'styled-components'
import { includeUnderDog } from '../../../../style/fonts/includeFontsMixin';

export const LogoTextStyled = styled.h1`
    ${includeUnderDog('700','40px')};
    margin: 0 32px;
    @media (max-width: 768px) {
        font-size: 25px;
        margin: 0 16px;
        font-weight: 400;
    }
`