import { ArrowForward } from './components/Icon';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div>
      <Button variant="filled" color="primary">
        Button
      </Button>
      <Button variant="outlined" color="primary">
        Button
      </Button>
      <Button variant="ghost" color="primary">
        Button
      </Button>
      <Button variant="filled" color="primary">
        Button <ArrowForward />
      </Button>
    </div>
  );
}

export default App;
