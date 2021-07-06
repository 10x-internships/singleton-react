import { useEffect, useState } from 'react';
import { SubHeading, Body, SubHeadingWrapper, BodyWrapper, TypoTag } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import { palette } from '../../../styles/GlobalStyle';
import { singletonAPI } from '../../../config/api';
import styled from 'styled-components';
import Container from '../../../components/Container';
import FeatureItem from './FeatureItem';
import Loader from '../../../components/Loader';

type FeaturesListType = {
  id: string;
  icon: string;
  name: string;
  description: string;
  order: number;
};

const StyledFeatures = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 32px;

  & ${SubHeadingWrapper} {
    margin-bottom: 48px;
    text-align: center;
  }

  & ${BodyWrapper} {
    color: ${palette.neutral.gray};
  }

  @media screen and (min-width: 768px) {
    & ${SubHeadingWrapper} {
      width: 79%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    & ${SubHeadingWrapper} {
      margin-bottom: 64px;
    }
  }

  @media screen and (min-width: 1200px) {
    & ${SubHeadingWrapper} {
      margin-top: 48px;
      margin-bottom: 72px;
    }
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  column-gap: 20px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    row-gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 30px;
  }
`;

const FeaturesExplore = styled.div`
  text-align: center;

  & ${BodyWrapper} {
    margin: 32px 0 16px;
  }

  @media screen and (min-width: 768px) {
    & ${BodyWrapper} {
      width: 80%;
      margin: 32px auto 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    & ${BodyWrapper} {
      width: 62%;
      margin: 32px auto 24px;
    }
  }
`;

const Features = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [featuresList, setFeaturesList] = useState<FeaturesListType[]>([]);

  useEffect(() => {
    async function fetchFeatures() {
      const featuresData = await singletonAPI.get('features');
      const sortedData = featuresData.data.data.sort((a: FeaturesListType, b: FeaturesListType) => a.order - b.order);
      setFeaturesList(sortedData);
      setIsLoading(false);
    }

    fetchFeatures();
  }, []);

  return (
    <StyledFeatures>
      <Container>
        <SubHeading typoTag={TypoTag.H2}>Save time managing social media for your business</SubHeading>
        {isLoading && <Loader />}
        <FeaturesList>
          {featuresList.length !== 0 && featuresList.map((feature) => <FeatureItem key={feature.id} {...feature} />)}
        </FeaturesList>
        <FeaturesExplore>
          <Body typoTag={TypoTag.Paragraph}>
            Create screens directly in Singleton or add your images from Sketch or Figma. You can even sync designs from your
            cloud storage!
          </Body>
          <Button>Explore All Features</Button>
        </FeaturesExplore>
      </Container>
    </StyledFeatures>
  );
};

export default Features;
