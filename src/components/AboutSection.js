import React, { useEffect } from 'react';
import './AboutSection.scss';

// ANIMATION LIBRARY SAL.JS
import  sal from 'sal.js';
// import 'sal.js/dist/sal.css';

function AboutSection() {
  // ANIMATION SAL.JS
  useEffect(() => {
    sal({
        threshold: 0.5,
        once: false,
        disable: false
      });
  }, []);

  return (
    <section className="info-area" id="info">
      <div className="container info-text">
        <div className="welcome-text">
          <h2 className="text-center"  
            ><span>About me</span></h2>
        </div>
        <div className="row">
          <div className="col-lg-5 column-1"
            data-sal-duration="1200"
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease-out-bounce"
          > 
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

          <div className="col-lg-5 column-2"
            data-sal-duration="1200"
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-easing="ease-out-bounce"
          >
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
