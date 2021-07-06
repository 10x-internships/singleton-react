import styled, { css } from 'styled-components';
import { Body, Title, BodyWrapper, TitleWrapper, TypoTag } from 'components/Typography';
import { palette } from 'styles/GlobalStyle';
import { Button, ButtonColor, ButtonVariant } from 'components/Button';

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

  & ${BodyWrapper}:first-child {
    margin-bottom: 28px;
    font-size: 18px;
    color: ${palette.neutral.gray};
    line-height: 28px;
  }

  & ${BodyWrapper}:nth-child(3) {
    margin: 32px 0 55px;
    white-space: pre-line;

    & > * {
      font-size: 18px;
      line-height: 28px;
    }

    @media screen and (min-width: 1024px) {
      margin: 48px 0 88px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  & ${TitleWrapper} > * {
    font-size: 32px;
    line-height: 40px;
  }

  & > span {
    font-size: 18px;
    color: ${palette.neutral.gray};
    line-height: 28px;
  }
`;

const PricingItem = (props: PricingItemProps) => {
  const { name, price, description, isDefault } = props;

  let priceElement;

  if (price) {
    priceElement = (
      <Price>
        <Title typoTag={TypoTag.Span}>${price}</Title>
        <span>/month</span>
      </Price>
    );
  } else {
    priceElement = (
      <Price>
        <Title typoTag={TypoTag.Span}>Free</Title>
      </Price>
    );
  }

  return (
    <StyledPricingItem isDefault={isDefault}>
      <Body typoTag={TypoTag.H3}>{name}</Body>
      {priceElement}
      <Body typoTag={TypoTag.Paragraph}>{description}</Body>
      <Button colorType={ButtonColor.Secondary} variant={isDefault ? ButtonVariant.Filled : ButtonVariant.Outlined}>
        Select Plan
      </Button>
    </StyledPricingItem>
  );
};

export default PricingItem;
