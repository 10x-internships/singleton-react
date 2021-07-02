import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { singletonAPI } from '../../../api/config';
import Loader from '../../../components/Loader';
import Container from '../../../components/Container';
import Row from '../../../components/Row';
import Col, { ColumnNumber } from '../../../components/Col';
import { Body, SubHeading, TypoTag } from '../../../components/Typography';
import { palette } from '../../../styles/GlobalStyle';
import PricingItem from './PricingItem';

type PriceList = {
  id: string;
  name: string;
  description: string;
  price: number;
  order: number;
  isDefault: boolean;
};

const StyledPricing = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 32px;

  & h2 {
    margin-bottom: 48px;
    text-align: center;
  }

  & ${Container} > p {
    margin-top: 24px;
    color: ${palette.neutral.gray};
  }

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;

    & ${Container} > p {
      max-width: 80%;
      margin-top: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 48px;

    & h2 {
      max-width: 75%;
      text-align: left;
    }
  }
`;

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [priceList, setPriceList] = useState<PriceList[]>([]);

  useEffect(() => {
    async function fetchPriceList() {
      const { data } = await singletonAPI.get('pricing');
      setPriceList(data.data);
      setIsLoading(false);
    }

    fetchPriceList();
  }, []);

  return (
    <StyledPricing>
      <Container>
        <SubHeading typoTag={TypoTag.H2}>Build the right plan for your team</SubHeading>
        {isLoading && <Loader />}
        <Row rowGap={24}>
          {priceList.length !== 0 &&
            priceList.map((price) => (
              <Col key={price.id} order={price.order} md={ColumnNumber.TWELVE} lg={ColumnNumber.FOUR}>
                <PricingItem {...price} />
              </Col>
            ))}
        </Row>
        <Body typoTag={TypoTag.Paragraph}>
          Create screens directly in Singleton or add your images from Sketch or Figma. You can even sync designs from your cloud
          storage!
        </Body>
      </Container>
    </StyledPricing>
  );
};

export default Pricing;
