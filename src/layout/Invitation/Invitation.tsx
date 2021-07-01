import Container from '../../components/Container';
import Row from '../../components/Row';
import Col, { ColumnNumber } from '../../components/Col';
import { SubHeading, Body, Caption, TypoTag } from '../../components/Typography';
import { PlayCircle } from '../../components/Icon';
import { palette } from '../../styles/GlobalStyle';
import phone from '../../assets/phone.jpg';
import keyfolder from '../../assets/keyfolder.svg';
import { StyledInvitation, InvitationVideo, APIDescription } from './style';

const Invitation = () => {
  return (
    <StyledInvitation>
      <Container>
        <SubHeading typoTag={TypoTag.H2}>Invite friends & earn rewards</SubHeading>
        <InvitationVideo>
          <PlayCircle color={palette.secondary.main} />
          <Caption typoTag={TypoTag.Span}>Play Introduction Video</Caption>
        </InvitationVideo>
        <Row>
          <Col md={ColumnNumber.SEVEN} lg={ColumnNumber.FIVE}>
            <img src={phone} alt="Phone" />
          </Col>
          <Col lg={ColumnNumber.SEVEN}>
            <img src={keyfolder} alt="A man with red shirt" />
          </Col>
        </Row>
        <APIDescription>
          <Body typoTag={TypoTag.Paragraph}>
            Create screens directly in Singleton or add your images from Sketch or Figma. You can even sync designs from your
            cloud storage!
          </Body>
        </APIDescription>
      </Container>
    </StyledInvitation>
  );
};

export default Invitation;
