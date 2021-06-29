import React from 'react';
import styled from 'styled-components';
import { Caption, TypoTag } from '../Typography';
import { palette } from '../../styles/GlobalStyle';

const StyledNavMenuItem = styled.li`
  @media screen and (min-width: 1024px) {
    & + & {
      margin-left: 32px;
    }
  }
`;

const NavMenuLink = styled.a<{ isActive?: boolean }>`
  width: 100%;
  padding: 15px 32px;
  color: ${palette.neutral.gray};
  transition: all 0.15s linear;

  @media screen and (max-width: 991px) {
    &:hover {
      color: ${palette.neutral.white};
      background-color: ${palette.secondary.light};
    }
    &:active {
      background-color: ${palette.secondary.dark};
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    color: ${palette.neutral.black};

    &:hover {
      color: ${palette.neutral.gray};
    }

    ${(props) => props.isActive && `color: ${palette.neutral.gray}`}
  }
`;

const NavMenuItem: React.FC<{ href: string; isActive?: boolean }> = (props) => {
  return (
    <StyledNavMenuItem>
      <NavMenuLink href={props.href} isActive={props.isActive}>
        <Caption typoTag={TypoTag.Span}>{props.children}</Caption>
      </NavMenuLink>
    </StyledNavMenuItem>
  );
};

export default NavMenuItem;
