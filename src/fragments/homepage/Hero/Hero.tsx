import HeroContainer from '../../../components/Container';
import { Heading as HeroHeading, Body as HeroDescription, TypoTag } from '../../../components/Typography';
import { Mail } from '../../../components/Icon';
import { TextField } from '../../../components/TextField';
import { Button } from '../../../components/Button';
import { StyledHero, HeroContent, HeroContact, HeroImageWrapper } from './style';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <HeroContent>
          <HeroHeading typoTag={TypoTag.H1}>Make more time for the work that matters most</HeroHeading>
          <HeroDescription typoTag={TypoTag.Paragraph}>
            Create screens directly in Singleton or add your images from Sketch or Figma. You can even sync designs from your
            cloud storage!
          </HeroDescription>
          <HeroContact>
            <TextField icon={<Mail />} placeholder="Type your e-mail" />
            <Button>Get Started</Button>
          </HeroContact>
        </HeroContent>
        <HeroImageWrapper>
          <img src="/images/analytics.jpg" alt="A Woman talk about something" />
        </HeroImageWrapper>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
