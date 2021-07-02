import styled, { css } from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import NavMenuItem from './NavMenuItem';
import { Button, ButtonColor, ButtonVariant } from '../Button';

const NavMenuAuth = styled.div`
  position: relative;
  padding: 0 16px;
  margin-top: 8px;

  & button {
    width: 100%;
    display: block;
  }

  & button:first-of-type {
    margin: 24px 0;
  }

  & div {
    width: 100%;
    height: 1px;
    background-color: ${palette.neutral.gray};
  }
`;

const StyledNavMenu = styled.nav<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  width: 280px;
  height: 100vh;
  padding-top: 84px;
  background-color: ${palette.neutral.white};
  transform: translateX(100%);
  transition: all 0.25s linear;

  ${(props) =>
    props.isMenuOpen &&
    css`
      transform: translateX(0%);
    `}

  @media screen and (min-width: 1024px) {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0 121px 0 206px;
    background-color: transparent;
    transform: translateX(0%);

    & ul {
      display: flex;
      align-items: center;
    }

    & ${NavMenuAuth} {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    margin: 0 214px 0 299px;
  }
`;

const NavMenu = (props: { isMenuOpen: boolean }) => {
  return (
    <StyledNavMenu isMenuOpen={props.isMenuOpen}>
      <ul>
        <NavMenuItem href="/">About</NavMenuItem>
        <NavMenuItem href="/">Service</NavMenuItem>
        <NavMenuItem href="/">Projects</NavMenuItem>
        <NavMenuItem href="/">Contacts</NavMenuItem>
      </ul>
      <NavMenuAuth>
        <div></div>
        <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Outlined}>
          Login
        </Button>
        <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Filled}>
          Sign Up
        </Button>
      </NavMenuAuth>
    </StyledNavMenu>
  );
};

export default NavMenu;
