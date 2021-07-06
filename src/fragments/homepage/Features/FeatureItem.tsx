import styled from 'styled-components';
import { Title, Body, TitleWrapper, BodyWrapper, TypoTag } from 'components/Typography';
import { ButtonIcon } from 'components/Button';
import { ArrowRightAlt } from 'components/Icon';
import { palette } from 'styles/GlobalStyle';
import getIcon from './getIcon';

type FeatureItemProps = {
  icon: string;
  name: string;
  description: string;
  order: number;
};

const StyledFeatureItem = styled.div<{ order: number }>`
  padding: 20px 10px 10px;
  background-color: ${palette.neutral.grayLight};
  border-radius: 5px;
  order: ${(props) => props.order};
  display: flex;
  flex-direction: column;

  & ${TitleWrapper} {
    margin-bottom: 18px;
  }

  & ${BodyWrapper} {
    margin-top: auto;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 767px) {
    & button {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 24px;

    & ${TitleWrapper} {
      margin-bottom: 24px;
    }

    & ${BodyWrapper} {
      margin-bottom: 40px;
    }
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 10px;

  & svg {
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 768px) {
    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const FeatureItem = ({ icon, name, description, order }: FeatureItemProps) => {
  return (
    <StyledFeatureItem order={order}>
      <FeatureIcon>{getIcon(icon)}</FeatureIcon>
      <Title typoTag={TypoTag.H3}>{name}</Title>
      <Body typoTag={TypoTag.Paragraph}>{description}</Body>
      <ButtonIcon aria-label="Go to page" icon={<ArrowRightAlt />} />
    </StyledFeatureItem>
  );
};

export default FeatureItem;
