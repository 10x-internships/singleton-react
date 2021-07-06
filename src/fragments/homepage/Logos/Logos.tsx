import styled from 'styled-components';
import LogosContainer from 'components/Container';
import logosData from './logosData';
import { rgba } from 'polished';

const StyledLogos = styled.section`
  margin-top: 32px;

  & ${LogosContainer} {
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

    @media screen and (min-width: 1024px) {
      width: 83.33%;
    }

    @media screen and (min-width: 1200px) {
      position: relative;
      padding-top: 48px;
      padding-bottom: 48px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 32px;
        width: calc(100% - 64px);
        height: 1px;
        background-color: ${rgba('#a9abbd', 0.4)};
      }
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
    width: auto;
  }
`;

const Logos = () => {
  return (
    <StyledLogos>
      <LogosContainer>
        {logosData.map((logo) => (
          <LogoWrapper key={logo.name}>
            <img src={logo.path} alt={logo.name} />
          </LogoWrapper>
        ))}
      </LogosContainer>
    </StyledLogos>
  );
};

export default Logos;
