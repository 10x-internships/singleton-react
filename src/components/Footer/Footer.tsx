import styled from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import Container from '../Container';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const StyledFooter = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 32px;
  background-color: ${palette.neutral.black};

  @media screen and (min-width: 1200px) {
    padding-top: 42px;
    padding-bottom: 42px;
    margin-top: 48px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
