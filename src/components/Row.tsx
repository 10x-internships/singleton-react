import React, { CSSProperties } from 'react';
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

type CustomCSSVariables = {
  '--row-gap': string;
  '--justify': JustifyContent;
  '--align': Align;
} & CSSProperties;

const StyledRow = styled.div<RowProps>`
  margin-left: -20px;
  display: flex;
  align-items: var(--align, ${Align.DEFAULT});
  justify-content: var(--justify, ${JustifyContent.DEFAULT});
  row-gap: var(--row-gap);
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};

  @media screen and (min-width: 1200px) {
    margin-left: -30px;
  }
`;

const Row: React.FC<RowProps> = (props) => {
  const { noWrap, rowGap, align, justifyContent, children } = props;

  return (
    <StyledRow
      style={
        {
          '--row-gap': (rowGap || 0) + 'px',
          '--align': align,
          '--justify': justifyContent,
        } as CustomCSSVariables
      }
      noWrap={noWrap}
    >
      {children}
    </StyledRow>
  );
};

export default Row;
