import styled from 'styled-components';
import { palette } from '../../styles/GlobalStyle';
import Container from '../../components/Container';

export const StyledHero = styled.section`
  padding: 48px 0;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;

    & ${Container} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const HeroContent = styled.div`
  & > * {
    margin: 0 auto;
  }

  & h1 {
    max-width: 656px;
  }

  & p {
    max-width: 460px;
    margin: 24px auto;
    color: ${palette.neutral.gray};
  }

  @media screen and (min-width: 1024px) {
    & > * {
      margin: 0;
    }

    & p {
      margin: 24px 0;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;

    & img {
      max-width: 360px;
    }
  }

  @media screen and (min-width: 1200px) {
    & img {
      max-width: 460px;
    }
  }
`;

export const HeroContact = styled.form`
  max-width: 418px;
  display: flex;
  justify-content: space-between;

  /* Style for the TextField  */
  & div:first-child {
    flex: 1;
    margin-right: 16px;
  }

  & button {
    max-width: 124px;
  }
`;
