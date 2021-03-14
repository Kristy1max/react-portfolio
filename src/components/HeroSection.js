// rfce
import React, { useEffect } from 'react';
import '../App.scss';
// import { Button } from './Button'; // for hero-btns 
import './HeroSection.scss';

// ANIMATION LIBRARY SAL.JS
import  sal from 'sal.js';

function HeroSection() {
  // ANIMATION LIBRARY
  useEffect(() => {
    sal({
        threshold: 0.5,
        once: false,
        disable: false
      });
  }, []);

  return (
    <div className='hero-container'>
      <video 
        src="videos/heroSectionVideoByPressmasterfromPexels.mp4" 
        copyright="Video by Pressmaster from Pexels" 
        autoPlay loop muted 
        style={{backgroundImage:"url(/images/hero-poster.png)"}}
      />
      <h1
        data-sal-duration="1200"
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        Hi! I&rsquo;m Kristina Zhizherina
      </h1>
      <p
        data-sal-duration="1200"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"  
      >
        Junior Frontend Developer
      </p>

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
