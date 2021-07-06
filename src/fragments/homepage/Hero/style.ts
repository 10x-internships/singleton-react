import styled from 'styled-components';
import { palette } from 'styles/GlobalStyle';
import HeroContainer from 'components/Container';
import { HeadingWrapper as HeroHeading, BodyWrapper as HeroDescription } from 'components/Typography';

export const StyledHero = styled.section`
  padding: 48px 0;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;

    & ${HeroContainer} {
      display: flex;
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1200px) {
    & ${HeroContainer} {
      align-items: center;
      gap: 30px;
    }
  }
`;

export const HeroContent = styled.div`
  & > * {
    margin: 0 auto;
  }

  & ${HeroDescription} {
    margin: 24px auto;
    color: ${palette.neutral.gray};
  }

  @media screen and (min-width: 768px) {
    & ${HeroHeading} {
      width: 83.33%;
    }

    & ${HeroDescription} {
      width: 66.66%;
      margin: 36px auto 32px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 66.66%;

    & > * {
      margin: 0;
    }

    & ${HeroHeading} {
      width: 100%;
    }

    & ${HeroDescription} {
      width: 66.66%;
      margin: 36px 0 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 58.33%;
  }
`;

export const HeroImageWrapper = styled.div`
  display: none;

  & img {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    display: block;
    flex: 1;
  }
`;

export const HeroContact = styled.form`
  display: flex;

  /* Style for the TextField  */
  & > div:first-child {
    flex: 1;
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 58.33%;
  }
`;
