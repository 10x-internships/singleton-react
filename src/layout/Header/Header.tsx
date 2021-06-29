import { useEffect, useState } from 'react';

import { Logo, MenuBars, MenuClose } from '../../components/Icon';
import Container from '../../components/Container';
import { NavMenu } from '../../components/Navbar';
import { Button, ButtonColor, ButtonVariant } from '../../components/Button';
import { StyledHeader, HeaderLogo, MenuIcon, Overlay, NavAuth } from './style';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <Container>
        <HeaderLogo href="/">
          <Logo />
        </HeaderLogo>
        <NavMenu isMenuOpen={isMenuOpen} />
        <NavAuth>
          <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Ghost}>
            Login
          </Button>
          <Button colorType={ButtonColor.Secondary} variant={ButtonVariant.Outlined}>
            Sign up
          </Button>
        </NavAuth>
        <MenuIcon onClick={handleToggleMenu}>{isMenuOpen ? <MenuClose /> : <MenuBars />}</MenuIcon>
        <Overlay isMenuOpen={isMenuOpen} onClick={handleToggleMenu} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
