import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
import SkillsSection from '../SkillsSection';
import ProjectsSection from '../ProjectsSection';
// import Cards from '../Cards';
import Footer from '../Footer';


import AboutSection from '../AboutSection';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
