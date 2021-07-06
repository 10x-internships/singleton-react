import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { StyledButtonProps, StyledButtonIconProps, ButtonVariant, ButtonColor } from './type';

const buttonBase = (color: string, border: string | number, borderRadius: string, bg: string, disabled?: boolean) => css`
  color: ${color};
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: all 0.25s linear;

  ${disabled &&
  `
    pointer-events: none;
    cursor: default;
    user-select: none;
  `}
`;

// Style for normal button
export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, disabled }) => buttonBase(theme.neutral.white, '2px solid transparent', '5px', 'transparent', disabled)}

  padding: 6px 14px;
  text-align: center;
  display: inline-flex;
  align-items: center;

  & svg {
    margin-left: 8px;
  }

  ${({ theme, variant = ButtonVariant.Filled, colorType = ButtonColor.Primary, disabled }) => {
    const alpha = 0.1;
    if (variant === 'filled') {
      return css`
        background-color: ${theme[colorType].main};

        &:hover {
          background-color: ${theme[colorType].light};
        }
        &:active {
          background-color: ${theme[colorType].dark};
        }
        ${disabled && `background-color: ${theme[colorType].lightest};`}
      `;
    }

    return css`
      color: ${theme[colorType].main};
      ${variant === 'outlined' && `border: 2px solid ${theme[colorType].main};`}

      &:hover {
        color: ${theme[colorType].light};
        background-color: ${rgba(`${theme[colorType].light}`, alpha)};
        ${variant === 'outlined' && `border-color: ${theme[colorType].light};`}
      }
      &:active {
        color: ${theme[colorType].dark};
        background-color: ${rgba(`${theme[colorType].dark}`, alpha)};
        ${variant === 'outlined' && `border-color: ${theme[colorType].dark};`}
      }
      ${disabled &&
      `
        color: ${theme[colorType].lightest};
        background-color: ${rgba(`${theme[colorType].lightest}`, alpha)};
        ${variant === 'outlined' && `border-color: ${theme[colorType].lightest};`}
      `}
    `;
  }};
`;

// Style for Button Circle with Icon
export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  ${({ theme, disabled }) => buttonBase(theme.secondary.main, 0, '100%', theme.neutral.white, disabled)}
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `
    &:hover {
      color: ${theme.neutral.white};
      background-color: ${theme.secondary.light};
    }
    &:active {
      background-color: ${theme.secondary.dark};
    }
  `}

  ${({ theme, disabled }) =>
    disabled &&
    `
    color: ${theme.neutral.white};
    background-color: ${theme.secondary.lightest};
  `}
`;
