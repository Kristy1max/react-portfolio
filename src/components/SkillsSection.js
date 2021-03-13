import React from 'react';
import './SkillsSection.scss';
// import  sal from 'sal.js';

function SkillsSection() {
  // ANIMATION LIBRARY
  // sal({
  //   threshold: 0.5,
  //   once: false,
  //   disable: false,
  // });

  return (
    <section className='skills-section'>
      <h2 className='text-center'><span>Skill set</span></h2>
      <div className="skills-container">
        <div className="skills-group">
          <figure className="skills-item"
            // data-sal-duration="1200"
            // data-sal="slide-right"
            // data-sal-delay="300"
            // data-sal-easing="ease-out-bounce"
          >
            <img src="images/icon-js.png"/>
            <figcaption className="caption">JavaScript</figcaption>
          </figure>
        </div>
        <div className="skills-group"
            // data-sal-duration="1200"
            // data-sal="slide-right"
            // data-sal-delay="300"
            // data-sal-easing="ease-out-bounce"
            >
          <figure className="skills-item">
            <img src="images/icon-react.png"/>
            <figcaption className="caption">React</figcaption>
          </figure>
          <figure className="skills-item">
            <img src="images/icon-github.png"/>
            <figcaption className="caption">Git</figcaption>
          </figure>
        </div>
        <div className="skills-group">
          <figure className="skills-item"
            // data-sal-duration="1200"
            // data-sal="slide-down"
            // data-sal-delay="300"
            // data-sal-easing="ease-out-bounce"
          >
            <img src="images/icon-html5.png"/>
            <figcaption className="caption">HTML5</figcaption>
          </figure>
          <figure className="skills-item">
            <img src="images/icon-sass.png"/>
            <figcaption className="caption">Sass</figcaption>
          </figure>
          <figure className="skills-item"
            // data-sal-duration="1200"
            // data-sal="slide-up"
            // data-sal-delay="300"
            // data-sal-easing="ease-out-bounce"
          >
            <img src="images/icon-vscode.png"/>
            <figcaption className="caption">Visual Studio</figcaption>
          </figure>
        </div>
        <div className="skills-group"
          // data-sal-duration="1200"
          // data-sal="slide-left"
          // data-sal-delay="300"
          // data-sal-easing="ease-out-bounce"
        >
          <figure className="skills-item">
            <img src="images/icon-css3.png"/>
            <figcaption className="caption">CSS3</figcaption>
          </figure>
          <figure className="skills-item">
            <img src="images/icon-figma.png"/>
            <figcaption className="caption">Figma</figcaption>
          </figure>
        </div>
        <div className="skills-group"
          // data-sal-duration="1200"
          // data-sal="slide-left"
          // data-sal-delay="300"
          // data-sal-easing="ease-out-bounce"
        >
          <figure className="skills-item">
            <img src="images/icon-bootstrap.png"/>
            <figcaption className="caption">Bootstrap</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
