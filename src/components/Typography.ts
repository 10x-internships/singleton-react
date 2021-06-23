import styled from 'styled-components';

export const Heading = styled.h1`
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

export const SubHeading = styled.h2`
  font-size: 40px;
  font-weight: var(--font-weight-medium);
  line-height: 48px;

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    font-weight: var(--font-weight-regular);
    line-height: 72px;
  }
`;

export const Title = styled.h3`
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

export const Caption = styled.h4`
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  line-height: 24px;
`;

export const Body = styled.p`
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
