import { Button, ButtonIcon } from './components/Button';
import { ArrowForward, ArrowRightAlt } from './components/Icon';

function App() {
  return (
    <div>
      <Button colorType="primary" variant="filled" icon={<ArrowForward />}>
        Button
      </Button>
      <ButtonIcon icon={<ArrowRightAlt />} />
    </div>
  );
}

export default App;
