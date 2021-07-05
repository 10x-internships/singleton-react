import styled from 'styled-components';
import { TextField } from '../TextField';
import { Button } from '../Button';
import { Mail, YouTube, Linkedin, Twitter } from '../Icon';
import { palette } from '../../styles/GlobalStyle';

const StyledFooterBottom = styled.div`
  padding-top: 16px;
  margin-top: 32px;
  border-top: 1px solid ${palette.neutral.gray};

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterForm = styled.div`
  display: flex;
  margin-bottom: 50px;

  & > div:first-child {
    flex: 1;
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    color: ${palette.neutral.white};
  }

  @media screen and (min-width: 768px) {
    & a + a {
      margin-left: 16px;
    }
  }
`;
const FooterBottom = () => {
  return (
    <StyledFooterBottom>
      <FooterForm>
        <TextField placeholder="Type your e-mail" icon={<Mail />} />
        <Button>Get Started</Button>
      </FooterForm>
      <FooterSocial>
        <a href="/">
          <Linkedin />
        </a>
        <a href="/">
          <YouTube />
        </a>
        <a href="/">
          <Twitter />
        </a>
      </FooterSocial>
    </StyledFooterBottom>
  );
};

export default FooterBottom;
