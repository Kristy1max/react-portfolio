import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
// import Cards from '../Cards';
import Footer from '../Footer';

import AboutSection from '../AboutSection';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
