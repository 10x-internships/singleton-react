import styled, { css } from 'styled-components';
import { Body, Title, TypoTag } from '../../../components/Typography';
import { palette } from '../../../styles/GlobalStyle';
import { Button, ButtonColor, ButtonVariant } from '../../../components/Button';

type PricingItemProps = {
  name: string;
  price: number;
  description: string;
  isDefault: boolean;
};

const StyledPricingItem = styled.div<{ isDefault: boolean }>`
  padding: 30px 25px;
  text-align: center;
  border: 1px solid ${palette.accent.blueLight};
  border-radius: 10px;

  ${(props) =>
    props.isDefault &&
    css`
      color: ${palette.neutral.white};
      background-color: ${palette.neutral.black};
    `}

  & h4 {
    margin-bottom: 28px;
    font-size: 18px;
    color: ${palette.neutral.gray};
    line-height: 28px;
  }

  & h3 {
    font-size: 32px;
    line-height: 40px;

    & span {
      font-size: 18px;
      color: ${palette.neutral.gray};
      line-height: 28px;
    }
  }

  & p {
    margin: 32px 0 55px;
    font-size: 18px;
    line-height: 28px;
    white-space: pre-line;
  }

  @media screen and (min-width: 1024px) {
    & p {
      margin: 48px 0 88px;
    }
  }
`;

const PricingItem = (props: PricingItemProps) => {
  const { name, price, description, isDefault } = props;

  let priceElement;

  if (price) {
    priceElement = (
      <Title typoTag={TypoTag.H3}>
        ${price}
        <Body typoTag={TypoTag.Span}>/month</Body>
      </Title>
    );
  } else {
    priceElement = <Title typoTag={TypoTag.H3}>Free</Title>;
  }

  return (
    <StyledPricingItem isDefault={isDefault}>
      <Body typoTag={TypoTag.H4}>{name}</Body>
      {priceElement}
      <Body typoTag={TypoTag.Paragraph}>{description}</Body>
      <Button colorType={ButtonColor.Secondary} variant={isDefault ? ButtonVariant.Filled : ButtonVariant.Outlined}>
        Select Plan
      </Button>
    </StyledPricingItem>
  );
};

export default PricingItem;
