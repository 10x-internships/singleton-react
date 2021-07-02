import { Hero } from '../fragments/homepage/Hero';
import { Logos } from '../fragments/homepage/Logos';
import { Features } from '../fragments/homepage/Features';
import { APIReference } from '../fragments/homepage/APIReference';
import { Invitation } from '../fragments/homepage/Invitation';
import { Pricing } from '../fragments/homepage/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <APIReference />
      <Invitation />
      <Pricing />
    </>
  );
};

export default Home;
