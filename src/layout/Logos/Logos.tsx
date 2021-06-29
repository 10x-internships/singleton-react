import styled from 'styled-components';
import Container from '../../components/Container';
import logosData from './logosData';

const StyledLogos = styled.section`
  margin-top: 32px;

  & ${Container} {
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 24px;

    @media screen and (min-width: 768px) {
      column-gap: 32px;
    }

    @media screen and (min-width: 1200px) {
      padding-top: 48px;
      padding-bottom: 48px;
      border-top: 1px solid #a9abbd;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  text-align: center;

  & img {
    display: inline-block;
  }

  @media screen and (min-width: 768px) {
    width: 14%;
  }

  @media screen and (min-width: 1200px) {
    width: auto;
  }
`;

const Logos = () => {
  return (
    <StyledLogos>
      <Container>
        {logosData.map((logo) => (
          <LogoWrapper key={logo.name}>
            <img src={logo.path} alt={logo.name} />
          </LogoWrapper>
        ))}
      </Container>
    </StyledLogos>
  );
};

export default Logos;
