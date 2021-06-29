import Container from '../../components/Container';
import { Heading, Body, TypoTag } from '../../components/Typography';
import { Mail } from '../../components/Icon';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import heroImage from '../../assets/analytics.svg';
import { StyledHero, HeroContent, HeroContact, HeroImageWrapper } from './style';

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
