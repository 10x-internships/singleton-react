import styled, { css } from 'styled-components';

type ButtonProps = {
  color: 'primary' | 'secondary';
  variant: 'filled' | 'outlined' | 'ghost';
  icon?: JSX.Element;
};

const ButtonBase = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s linear;
  display: flex;
  align-items: center;

  & svg {
    margin-left: 8px;
  }

  &:disabled {
    cursor: initial;
  }
`;

export const Button = styled(ButtonBase)<ButtonProps>`
  ${(props) => {
    const alpha = 0.1;

    if (props.variant === 'filled') {
      return css`
        color: var(--white);
        background-color: var(--${props.color});

        &:hover {
          background-color: var(--${props.color}-light);
        }
        &:active {
          background-color: var(--${props.color}-dark);
        }
        &:disabled {
          background-color: var(--${props.color}-lightest);
        }
      `;
    }

    if (props.variant === 'outlined') {
      return css`
        color: var(--${props.color});
        border: 2px solid var(--${props.color});

        &:hover {
          color: var(--${props.color}-light);
          background-color: rgba(var(--${props.color}-light-rgb), ${alpha});
          border-color: var(--${props.color}-light);
        }
        &:active {
          color: var(--${props.color}-dark);
          background-color: rgba(var(--${props.color}-dark-rgb), ${alpha});
          border-color: var(--${props.color}-dark);
        }
        &:disabled {
          color: var(--${props.color}-lightest);
          background-color: rgba(var(--${props.color}-lightest-rgb), ${alpha});
          border-color: var(--${props.color}-lightest);
        }
      `;
    }

    if (props.variant === 'ghost') {
      return css`
        color: var(--${props.color});

        &:hover {
          color: var(--${props.color}-light);
          background-color: rgba(var(--${props.color}-light-rgb), ${alpha});
        }
        &:active {
          color: var(--${props.color}-dark);
          background-color: rgba(var(--${props.color}-dark-rgb), ${alpha});
        }
        &:disabled {
          color: var(--${props.color}-lightest);
          background-color: rgba(var(--${props.color}-lightest-rgb), ${alpha});
        }
      `;
    }
  }}
`;
