import styled, { css } from 'styled-components';
import { palette } from '../../styles/GlobalStyle';

const StyledTextField = styled.div<{ isFocus: boolean }>`
  padding: 8px 16px;
  background-color: ${palette.neutral.grayLight};
  border-radius: 5px;
  display: flex;
  align-items: center;

  & svg {
    color: ${palette.neutral.gray};
    margin-right: 8px;
    transition: color 0.25s linear;
  }

  & input {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    background-color: transparent;
    border: 0;
    outline: none;
  }

  & input:placeholder {
    color: ${palette.neutral.gray};
  }

  ${(props) =>
    props.isFocus &&
    css`
      svg {
        color: ${palette.neutral.black};
      }
    `}
`;

export default StyledTextField;
