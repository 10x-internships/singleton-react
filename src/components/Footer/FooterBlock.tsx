import styled from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import { Caption, Body, TypoTag } from '../Typography';

type FooterLinkArray = {
  name: string;
  path: string;
};

type FooterBlockProp = {
  title: string;
  links: FooterLinkArray[];
};

const StyledFooterBlock = styled.div`
  & h4 {
    margin-bottom: 14px;
    color: ${palette.neutral.white};
  }
`;

const FooterLink = styled.a`
  color: ${palette.accent.blueLight};
  display: block;

  & + & {
    margin-top: 4px;
  }
`;

const FooterBlock = (props: FooterBlockProp) => {
  return (
    <StyledFooterBlock>
      <Caption typoTag={TypoTag.H4}>{props.title}</Caption>
      {props.links.map((link, index) => (
        <FooterLink key={index} href={link.path}>
          <Body typoTag={TypoTag.Span}>{link.name}</Body>
        </FooterLink>
      ))}
    </StyledFooterBlock>
  );
};

export default FooterBlock;
