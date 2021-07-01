import styled from 'styled-components';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col, { ColumnNumber } from '../../components/Col';
import { Puzzle, ArrowForward } from '../../components/Icon';
import { Title, SubHeading, TypoTag } from '../../components/Typography';
import { Button } from '../../components/Button';
import { palette } from '../../styles/GlobalStyle';
import APIReferenceImage from '../../assets/tennisplayer.svg';

const StyledAPIReference = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 32px;

  & ${Row} {
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    & ${Col}:first-child {
      display: none;
    }
  }
`;

const APIHeading = styled.div`
  display: flex;
  align-items: center;

  & div {
    width: 64px;
    height: 64px;
    margin-right: 16px;
    background-color: #ffe6df;
    border-radius: 22px;
    display: grid;
    place-items: center;
  }
`;

const APIContent = styled.div`
  & h2 {
    margin: 32px 0;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 1200px) {
    & h2 {
      margin: 48px 0;
    }
  }
`;

const APIReference = () => {
  return (
    <StyledAPIReference>
      <Container>
        <Row>
          <Col md={ColumnNumber.SIX}>
            <img src={APIReferenceImage} alt="Tennis player" />
          </Col>
          <Col md={ColumnNumber.SIX}>
            <APIHeading>
              <div>
                <Puzzle color={palette.accent.orange} />
              </div>
              <Title typoTag={TypoTag.H3}>API Reference</Title>
            </APIHeading>
            <APIContent>
              <SubHeading typoTag={TypoTag.H2}>We believe in helping people pay attention to what matters</SubHeading>
              <Button icon={<ArrowForward />}>Explore All Features</Button>
            </APIContent>
          </Col>
        </Row>
      </Container>
    </StyledAPIReference>
  );
};

export default APIReference;
