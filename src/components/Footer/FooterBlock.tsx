import styled from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import { Caption, Body, CaptionWrapper, TypoTag } from '../Typography';

type FooterLinkArray = {
  name: string;
  path: string;
};

type FooterBlockProp = {
  title: string;
  links: FooterLinkArray[];
};

const StyledFooterBlock = styled.div`
  & ${CaptionWrapper} {
    margin-bottom: 14px;
    color: ${palette.neutral.white};
  }
`;

const FooterLink = styled.a`
  color: ${palette.accent.blueLight};
  display: block;
  transition: all 0.25s linear;

  & + & {
    margin-top: 4px;
  }

  &:hover {
    color: ${palette.neutral.white};
  }
`;

const FooterBlock = (props: FooterBlockProp) => {
  return (
    <StyledFooterBlock>
      <Caption typoTag={TypoTag.H2}>{props.title}</Caption>
      {props.links.map((link, index) => (
        <FooterLink key={index} href={link.path}>
          <Body typoTag={TypoTag.Span}>{link.name}</Body>
        </FooterLink>
      ))}
    </StyledFooterBlock>
  );
};

export default FooterBlock;
