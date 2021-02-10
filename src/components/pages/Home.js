import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import SkillsSection from '../SkillsSection';
import ProjectsSection from '../ProjectsSection';
// import Cards from '../Cards';
import Footer from '../Footer';

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
