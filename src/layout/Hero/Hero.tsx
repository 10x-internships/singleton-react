import styled from 'styled-components';
import Container from '../../components/Container';
import { Heading, Body, TypoTag } from '../../components/Typography';
import { Mail } from '../../components/Icon';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import heroImage from '../../assets/analytics.svg';
import { palette } from '../../styles/GlobalStyle';

const StyledHero = styled.section`
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

const HeroContent = styled.div`
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

const HeroImageWrapper = styled.div`
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

const HeroContact = styled.form`
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

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroContent>
          <Heading typoTag={TypoTag.H1}>Make more time for the work that matters most</Heading>
          <Body typoTag={TypoTag.Paragraph}>
            Create screens directly in Singleton or add your images from Sketch or Figma. You can even sync designs from your
            cloud storage!
          </Body>
          <HeroContact>
            <TextField icon={<Mail />} placeholder="Type your e-mail" />
            <Button>Get Started</Button>
          </HeroContact>
        </HeroContent>
        <HeroImageWrapper>
          <img src={heroImage} alt="A Woman talk about something" />
        </HeroImageWrapper>
      </Container>
    </StyledHero>
  );
};

export default Hero;
