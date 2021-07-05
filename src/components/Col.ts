import styled from 'styled-components';

export enum ColumnNumber {
  ONE = 1,
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
  sm?: ColumnNumber;
  md?: ColumnNumber;
  lg?: ColumnNumber;
  xl?: ColumnNumber;
  center?: boolean;
};

const calcCol = (col: number, isDesktop?: boolean) => {
  if (isDesktop) {
    return `calc(${(col / 12) * 100}% - 30px)`; // Subtract the gutter from desktop
  }
  return `calc(${(col / 12) * 100}% - 20px)`; // Subtract the gutter from tablet & mobile
};

const Col = styled.div<ColProps>`
  margin-left: 20px;
  flex-grow: 1;
  ${(props) => props.sm && `flex: 0 0 ${calcCol(props.sm)};`}
  ${(props) => props.center && `margin-left: auto; margin-right: auto`}

  @media screen and (min-width: 768px) {
    ${(props) => props.md && `flex: 0 0 ${calcCol(props.md)};`}
  }

  @media screen and (min-width: 1024px) {
    ${(props) => props.lg && `flex: 0 0 ${calcCol(props.lg)};`}
  }

  @media screen and (min-width: 1200px) {
    margin-left: 30px;
    ${(props) => {
      if (props.xl) {
        return `flex: 0 0 ${calcCol(props.xl, true)};`;
      }
      return `flex: 0 0 ${calcCol(props.lg || props.md || props.sm!, true)};`;
    }}
  }
`;

export default Col;
