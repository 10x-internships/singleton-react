import styled, { css } from 'styled-components';
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

const calcCol = (col: number) => {
  return ((col / 12) * 100).toFixed(2);
};

const Col = styled.div<ColProps>`
  --gutters: 20px;

  margin-left: 20px;
  flex-grow: 1;
  ${(props) => props.center && `margin-left: auto; margin-right: auto`}
  ${({ sm, md, lg, xl }) => css`
    ${sm && `flex: 0 0 calc(${calcCol(sm)}% - var(--gutters));`}

    @media screen and (min-width: 768px) {
      ${md && `flex: 0 0 calc(${calcCol(md)}% - var(--gutters));`}
    }

    @media screen and (min-width: 1024px) {
      ${lg && `flex: 0 0 calc(${calcCol(lg)}% - var(--gutters));`}
    }

    @media screen and (min-width: 1200px) {
      --gutters: 30px;
      margin-left: 30px;
      flex: 0 0 calc(${calcCol(xl || lg || md || sm || 12)}% - var(--gutters));
    }
  `}
`;

export default Col;
