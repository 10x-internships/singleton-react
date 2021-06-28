import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: calc(1146px + 32px);
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: calc(1146px + 64px);
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export default Container;
