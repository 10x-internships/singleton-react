import styled from 'styled-components';

type RowProps = {
  noWrap?: boolean;
  rowGap?: number;
};

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: space-between;
  column-gap: 20px;
  ${(props) => props.rowGap && `row-gap: ${props.rowGap}px;`};

  @media screen and (min-width: 1200px) {
    column-gap: 30px;
  }
`;

export default Row;
