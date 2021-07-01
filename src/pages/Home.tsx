import { Hero } from '../layout/Hero';
import { Logos } from '../layout/Logos';
import { Features } from '../layout/Features';
import { APIReference } from '../layout/APIReference';
import { Invitation } from '../layout/Invitation';

const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <APIReference />
      <Invitation />
    </>
  );
};

export default Home;
