import React from 'react';
import './AboutSection.scss';

function AboutSection() {
  return (
    <section className="info-area" id="info">
      <div className="container info-text">
        <div className="welcome-text">
          <h2 className="text-center"><span>About me</span></h2>
        </div>
        <div className="row">
          <div className="col-lg-5 column-1"> 
            <div> 
              <img className="team-img" src="/images/team-img.png" alt="Team image" copyright="Icon made by Flat Icons from www.flaticon.com"/>
              <p>Productive and effective either way if it is a team-play or independent work.</p>
            </div>
            <hr/>
            <div>
              <img className="rocket-img" src="/images/rocket-img.png" alt="Rocket image" copyright="Icon made by Flat Icons from www.flaticon.com"/>
              <p>Passionate and extremely motivated Junior Front-end developer eager to learn and create something new every day.</p>
            </div>
            <hr/>
          </div>

          <div className="col-lg-5 column-2">
            <div>
              <img className="webdesign-img" src="/images/webdesign-img.png" alt="Web-design image" copyright="Icon made by Freepik from www.flaticon.com"/>
              <p>Keen to build or clone sites that will be optimized to load fast, responsive, and a pleasure to use.</p>
            </div>
            <hr/>
            <div>
              <img className="competence-img" src="/images/competence-img.png" alt="Competence image" copyright="Icon made by Flat Icons from www.flaticon.com"/>
              <p>4 years of customer communication, adaptability, and time-management solid experiences in a huge car company.</p>
            </div>  
            <hr/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
