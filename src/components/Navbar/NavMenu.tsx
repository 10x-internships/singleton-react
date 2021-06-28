import styled from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import { rgba } from 'polished';
import NavMenuItem from './NavMenuItem';
import { Button, ButtonColor, ButtonVariant } from '../Button';

const StyledNavMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  padding-top: 84px;
  background-color: ${palette.neutral.white};
  z-index: 20;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${rgba(`${palette.neutral.black}`, 0.45)};
  z-index: 10;
`;

const NavMenuList = styled.ul``;

const NavMenuAuth = styled.div`
  padding: 0 16px;
  margin-top: 8px;

  & button {
    width: 100%;
    display: block;
  }

  & button:first-child {
    margin: 24px 0;
  }
`;

const NavMenu = () => {
  return (
    <>
      <StyledNavMenu>
        <NavMenuList>
          <NavMenuItem href="/">About</NavMenuItem>
          <NavMenuItem href="/">Service</NavMenuItem>
          <NavMenuItem href="/">Projects</NavMenuItem>
          <NavMenuItem href="/">Contacts</NavMenuItem>
        </NavMenuList>
        <NavMenuAuth>
          <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Outlined}>
            Login
          </Button>
          <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Filled}>
            Sign Up
          </Button>
        </NavMenuAuth>
      </StyledNavMenu>
      <Overlay />
    </>
  );
};

export default NavMenu;
