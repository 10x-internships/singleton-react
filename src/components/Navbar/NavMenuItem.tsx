import React from 'react';
import styled from 'styled-components';
import { Caption, TypoTag } from '../Typography';
import { palette } from '../../styles/GlobalStyle';

const StyledNavMenuItem = styled.li``;

const NavMenuLink = styled.a`
  width: 100%;
  padding: 15px 32px;
  color: ${palette.neutral.gray};
  transition: all 0.15s linear;

  &:hover {
    color: ${palette.neutral.white};
    background-color: ${palette.secondary.light};
  }
  &:active {
    background-color: ${palette.secondary.dark};
  }
`;

const NavMenuItem: React.FC<{ href: string }> = (props) => {
  return (
    <StyledNavMenuItem>
      <NavMenuLink href={props.href}>
        <Caption typoTag={TypoTag.Span}>{props.children}</Caption>
      </NavMenuLink>
    </StyledNavMenuItem>
  );
};

export default NavMenuItem;
