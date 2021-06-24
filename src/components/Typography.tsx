import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
};

// Heading typography style
const StyledHeading = styled.div`
  font-size: 40px;
  font-weight: var(--font-weight-semi-bold);
  line-height: 48px;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    font-weight: var(--font-weight-medium);
    line-height: 78px;
  }
`;
export const Heading = ({ headingLevel, children }: HeadingProps) => {
  return <StyledHeading as={headingLevel}>{children}</StyledHeading>;
};

// SubHeading typography style
const StyledSubHeading = styled.div`
  font-size: 40px;
  font-weight: var(--font-weight-medium);
  line-height: 48px;

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    font-weight: var(--font-weight-regular);
    line-height: 72px;
  }
`;
export const SubHeading = ({ headingLevel, children }: HeadingProps) => {
  return <StyledSubHeading as={headingLevel}>{children}</StyledSubHeading>;
};

// Title typography style
const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    font-weight: var(--font-weight-regular);
    line-height: 45px;
  }
`;
export const Title = ({ headingLevel, children }: HeadingProps) => {
  return <StyledTitle as={headingLevel}>{children}</StyledTitle>;
};

// Caption typography style
const StyledCaption = styled.div`
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  line-height: 24px;
`;
export const Caption = ({ headingLevel, children }: HeadingProps) => {
  return <StyledCaption as={headingLevel}>{children}</StyledCaption>;
};

// Body typography style
const StyledBody = styled.div`
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const Body = ({ headingLevel, children }: HeadingProps) => {
  return <StyledBody as={headingLevel}>{children}</StyledBody>;
};
