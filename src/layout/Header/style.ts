import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { palette } from '../../styles/GlobalStyle';
import Container from '../../components/Container';

export const StyledHeader = styled.header`
  padding: 20px 0;

  & ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & svg {
    display: block;
  }
`;

export const HeaderLogo = styled.a`
  color: ${palette.neutral.black};
`;

export const MenuIcon = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 30;

  @media screen and (min-width: 1023px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${rgba(`${palette.neutral.black}`, 0.45)};
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s linear;

  ${(props) =>
    props.isMenuOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const HeaderAuth = styled.div`
  display: none;

  & button:first-child {
    margin-right: 16px;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
