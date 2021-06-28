import { Button, ButtonIcon, ButtonColor, ButtonVariant } from './components/Button';
import { ArrowForward, ArrowRightAlt } from './components/Icon';

function App() {
  return (
    <div>
      <Button colorType={ButtonColor.Primary} variant={ButtonVariant.Filled} icon={<ArrowForward />} disabled>
        Button
      </Button>
      <ButtonIcon icon={<ArrowRightAlt />} disabled />
    </div>
  );
}

export default App;
