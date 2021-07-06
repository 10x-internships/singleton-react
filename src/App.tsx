import { ThemeProvider } from 'styled-components';
import { palette } from 'styles/GlobalStyle';
import { Header } from './components/Header';
import HomePage from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={palette}>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
