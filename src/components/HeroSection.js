// rfce
import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="videos/heroSectionVideoByPressmasterfromPexels.mp4" copyright="Video by Pressmaster from Pexels" autoPlay loop muted />
      <h1>Hi! I&rsquo;m Kristina Zhizherina</h1>
      <p>Junior Front End Developer</p>
      <div className='hero-btns'>
        <Button 
          className='btns'
          buttonStyle='btn--outline' 
          buttonSize='btn--large'>
          PROJECTS
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary' 
          buttonSize='btn--large'>
          PROJECTS2
        </Button>
      </div>
    </div> // #hero-container
  );
}

export default HeroSection;
