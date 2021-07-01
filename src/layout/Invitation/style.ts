import styled from 'styled-components';
import Col from '../../components/Col';
import Row from '../../components/Row';
import { palette } from '../../styles/GlobalStyle';

export const StyledInvitation = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 32px;

  & h2 {
    text-align: center;
  }

  & ${Row} ${Col} {
    background-color: ${palette.neutral.grayLight};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & ${Row} ${Col}:first-child {
    padding: 20px;
  }

  & ${Row} ${Col}:last-child {
    padding: 34px;
  }

  @media screen and (max-width: 1023px) {
    & ${Row} ${Col}:last-child {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    & ${Row} ${Col}:first-child {
      margin: 0 auto;
    }
  }
`;

export const InvitationVideo = styled.div`
  margin: 8px 0 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-right: 8px;
  }

  & span {
    color: ${palette.secondary.main};
  }
`;

export const APIDescription = styled.div`
  margin: 24px auto 0;
  color: ${palette.neutral.gray};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: 32px;
  }
`;
