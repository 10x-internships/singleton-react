import styled from 'styled-components';

export enum Align {
  DEFAULT = 'stretch',
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
}
export enum JustifyContent {
  DEFAULT = 'flex-start',
  BETWEEN = 'space-between',
}

type RowProps = {
  noWrap?: boolean;
  rowGap?: number;
  align?: Align;
  justifyContent?: JustifyContent;
};

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  align-items: ${(props) => (props.align ? props.align : Align.DEFAULT)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : JustifyContent.DEFAULT)};
  margin-left: -20px;
  ${(props) => props.rowGap && `row-gap: ${props.rowGap}px;`};

  @media screen and (min-width: 1200px) {
    margin-left: -30px;
  }
`;

export default Row;
