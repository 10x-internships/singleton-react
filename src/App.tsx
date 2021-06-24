import { Heading, SubHeading, Title, Caption, Body } from './components/Typography';
import { TypoTag } from './components/Typography';

function App() {
  return (
    <div>
      <Heading typoTag={TypoTag.H1}>Heading</Heading>
      <SubHeading typoTag={TypoTag.H1}>SubHeading</SubHeading>
      <Title typoTag={TypoTag.H1}>Title</Title>
      <Body typoTag={TypoTag.H1}>Body</Body>
      <Caption typoTag={TypoTag.H1}>Caption</Caption>
    </div>
  );
}

export default App;
