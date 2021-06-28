import { Button, ButtonIcon, ButtonColor, ButtonVariant } from './components/Button';
import { ArrowForward, ArrowRightAlt, Mail } from './components/Icon';
import { TextField } from './components/TextField';

function App() {
  return (
    <div>
      <Button colorType={ButtonColor.Primary} variant={ButtonVariant.Filled} icon={<ArrowForward />}>
        Button
      </Button>
      <ButtonIcon icon={<ArrowRightAlt />} disabled />
      <TextField icon={<Mail />} placeholder="Enter your email..." />
    </div>
  );
}

export default App;
