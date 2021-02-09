import React from 'react';
import './SkillsSection.scss';

function SkillsSection() {
  return (
    <section className='skills-section'>
      <h2 className='text-center'><span>Skill set</span></h2>
      <div className="skills-container">
        <div className="skills-group">
          <figure className="skills-item">
            <img src="images/icon-vscode.png"/>
            <figcaption className="caption">Visual Studio</figcaption>
          </figure>
        </div>
        <div className="skills-group">
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
          <figure className="skills-item html">
            <img src="images/icon-html5.png"/>
            <figcaption className="caption">HTML5</figcaption>
          </figure>
          <figure className="skills-item html">
            <img src="images/icon-css3.png"/>
            <figcaption className="caption">CSS3</figcaption>
          </figure>
          <figure className="skills-item html">
            <img src="images/icon-js.png"/>
            <figcaption className="caption">JavaScript</figcaption>
          </figure>
        </div>
        <div className="skills-group">
          <figure className="skills-item">
            <img src="images/icon-sass.png"/>
            <figcaption className="caption">Sass</figcaption>
          </figure>
          <figure className="skills-item">
            <img src="images/icon-bootstrap.png"/>
            <figcaption className="caption">Bootstrap</figcaption>
          </figure>
        </div>
        <div className="skills-group">
          <figure className="skills-item">
            <img src="images/icon-figma.png"/>
            <figcaption className="caption">Figma</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
