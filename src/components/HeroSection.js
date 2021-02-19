// rfce
import React from 'react';
import '../App.scss';
// import { Button } from './Button'; // for hero-btns 
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video 
        src="videos/heroSectionVideoByPressmasterfromPexels.mp4" 
        copyright="Video by Pressmaster from Pexels" 
        autoPlay loop muted 
        style={{backgroundImage:"url(/images/hero-poster.png)"}}
      />
      <h1>Hi! I&rsquo;m Kristina Zhizherina</h1>
      <p>Junior Frontend Developer</p>

      {/* <div className='hero-btns'>
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
          Sign-in
        </Button>
      </div> */}
    </div> // #hero-container
  );
}

export default HeroSection;
