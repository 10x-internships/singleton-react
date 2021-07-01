import styled from 'styled-components';

export enum ColumnNumber {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
}

type ColProps = {
  colNum?: ColumnNumber;
  sm?: ColumnNumber;
  md?: ColumnNumber;
  lg?: ColumnNumber;
  xl?: ColumnNumber;
  center?: boolean;
  order?: number;
};

const calcCol = (col: number, isDesktop?: true) => {
  if (isDesktop) {
    return `calc(${(col / 12) * 100}% - 20px)`;
  }

  return `calc(${(col / 12) * 100}% - 30px)`;
};

const Col = styled.div<ColProps>`
  flex-grow: 1;
  ${(props) => props.sm && `flex-basis: ${calcCol(props.sm)};`}
  ${(props) => props.center && `margin: 0 auto;`}
  ${(props) => props.order && `order: ${props.order}`}

  @media screen and (min-width: 768px) {
    ${(props) => props.md && `flex-basis: ${calcCol(props.md)};`}
  }

  @media screen and (min-width: 1024px) {
    ${(props) => props.lg && `flex-basis: ${calcCol(props.lg)};`}
  }

  @media screen and (min-width: 1200px) {
    ${(props) => props.xl && `flex-basis: ${calcCol(props.xl)};`}
  }
`;

export default Col;
