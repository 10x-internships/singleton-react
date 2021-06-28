import styled from 'styled-components';
import { Logo, MenuBars } from '../components/Icon';
import { palette } from '../styles/GlobalStyle';
import Container from '../components/Container';
import NavMenu from '../components/Navbar/NavMenu';

const StyledHeader = styled.header`
  padding: 28px 0;

  & ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & svg {
    display: block;
  }
`;

const NavMenuIcon = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 30;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <a href="/">
          <Logo color={palette.neutral.black} />
        </a>
        <NavMenuIcon>
          <MenuBars />
        </NavMenuIcon>
        <NavMenu />
        {/* NavAuth */}
      </Container>
    </StyledHeader>
  );
};

export default Header;
