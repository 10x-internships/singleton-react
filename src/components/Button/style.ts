import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { palette } from '../../styles/GlobalStyle';
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
  ${(props) => buttonBase(palette.neutral.white, '2px solid transparent', '5px', 'transparent', props.disabled)}

  padding: 6px 14px;
  text-align: center;
  display: inline-flex;
  align-items: center;

  & svg {
    margin-left: 8px;
  }

  ${({ variant = ButtonVariant.Filled, colorType = ButtonColor.Primary, disabled }) => {
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
        ${disabled && `background-color: ${palette[colorType].lightest};`}
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
      ${disabled &&
      `
        color: ${palette[colorType].lightest};
        background-color: ${rgba(`${palette[colorType].lightest}`, alpha)};
        ${variant === 'outlined' && `border-color: ${palette[colorType].lightest};`}
      `}
    `;
  }};
`;

// Style for Button Circle with Icon
export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  ${(props) => buttonBase(palette.secondary.main, 0, '100%', palette.neutral.white, props.disabled)}
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
  ${(props) =>
    props.disabled &&
    `
    color: ${palette.neutral.white};
    background-color: ${palette.secondary.lightest};
  `}
`;
