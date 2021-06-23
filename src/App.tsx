import React from 'react';
import { Heading } from './components/Typography';
import { ReactComponent as Logo } from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <Heading>Singleton React</Heading>
      <a href="/">
        <Logo />
      </a>
    </div>
  );
}

export default App;
