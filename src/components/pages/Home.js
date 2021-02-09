import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
import SkillsSection from '../SkillsSection';
// import Cards from '../Cards';
import Footer from '../Footer';


import AboutSection from '../AboutSection';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
