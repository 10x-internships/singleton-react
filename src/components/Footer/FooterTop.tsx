import styled from 'styled-components';
import { Logo } from '../Icon';
import { footerBlockData } from './footerBlockData';
import FooterBlock from './FooterBlock';
import { palette } from '../../styles/GlobalStyle';

const FooterLogo = styled.div`
  margin-bottom: 32px;
`;

const StyledFooterTop = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & ${FooterLogo} {
      width: 30%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;

  & > * {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    column-gap: 80px;

    & > * {
      width: auto;
    }
  }
`;

const FooterTop = () => {
  return (
    <StyledFooterTop>
      <FooterLogo>
        <Logo color={palette.neutral.white} />
      </FooterLogo>
      <FooterLinks>
        {footerBlockData.map((block) => (
          <FooterBlock key={block.title} {...block} />
        ))}
      </FooterLinks>
    </StyledFooterTop>
  );
};

export default FooterTop;
