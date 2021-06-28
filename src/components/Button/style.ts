import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { palette } from '../../styles/GlobalStyle';

export type StyledButtonProps = {
  colorType: 'primary' | 'secondary';
  variant: 'filled' | 'outlined' | 'ghost';
  icon?: JSX.Element;
};

export type StyledButtonIconProps = {
  icon?: JSX.Element;
};

const buttonBase = (color: string, border: string | number, borderRadius: string, bg: string) => css`
  color: ${color};
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: all 0.25s linear;

  &.btn-disabled {
    pointer-events: none;
    cursor: default;
    user-select: none;
  }
`;

// Style for normal button
export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase(palette.neutral.white, '2px solid transparent', '5px', 'transparent')}

  padding: 8px 16px;
  text-align: center;
  display: inline-flex;
  align-items: center;

  & svg {
    margin-left: 8px;
  }

  ${({ variant, colorType }) => {
    const alpha = 0.1;

    if (variant === 'filled') {
      return css`
        background-color: ${palette[colorType].main};

        &:hover {
          background-color: ${palette[colorType].light};
        }
        &:active {
          background-color: ${palette[colorType].dark};
        }
        &.btn-disabled {
          background-color: ${palette[colorType].lightest};
        }
      `;
    }

    return css`
      color: ${palette[colorType].main};
      ${variant === 'outlined' && `border: 2px solid ${palette[colorType].main};`}

      &:hover {
        color: ${palette[colorType].light};
        background-color: ${rgba(`${palette[colorType].light}`, alpha)};
        ${variant === 'outlined' && `border-color: ${palette[colorType].light};`}
      }
      &:active {
        color: ${palette[colorType].dark};
        background-color: ${rgba(`${palette[colorType].dark}`, alpha)};
        ${variant === 'outlined' && `border-color: ${palette[colorType].dark};`}
      }
      &.btn-disabled {
        color: ${palette[colorType].lightest};
        background-color: ${rgba(`${palette[colorType].lightest}`, alpha)};
        ${variant === 'outlined' && `border-color: ${palette[colorType].lightest};`}
      }
    `;
  }};
`;

// Style for Button Circle with Icon
export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  ${buttonBase(palette.secondary.main, 0, '100%', palette.neutral.white)}
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${palette.neutral.white};
    background-color: ${palette.secondary.light};
  }
  &:active {
    background-color: ${palette.secondary.dark};
  }
  &.btn-disabled {
    color: ${palette.neutral.white};
    background-color: ${palette.secondary.lightest};
  }
`;
