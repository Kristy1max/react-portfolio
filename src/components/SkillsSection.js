import React from 'react';
import './SkillsSection.scss';

function SkillsSection() {
  return (
    <section className='skills-section'>
      <h2 className='text-center'><span>Skill set</span></h2>

      <div className="skills-container">
        <div className="skills-group">
          <div className="skills-item hoopsai"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
        </div>
        <div className="skills-group">
          <div className="skills-item agoda"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
          <div className="skills-item getsafe"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
        </div>
        <div className="skills-group">
          <div className="skills-item grab"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
          <div className="skills-item crisp"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
          <div className="skills-item anyleads"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
        </div>
        <div className="skills-group">
          <div className="skills-item teachable"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
          <div className="skills-item flyr"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
        </div>
        <div className="skills-group">
          <div className="skills-item roger"><img src="images/luca-bravo-O453M2Liufs-unsplash.jpg"/></div>
        </div>
      </div>    
      
    </section>
  )
}

export default SkillsSection;
