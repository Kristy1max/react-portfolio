import React from 'react';
import './ProjectsSection.scss';
import './Button.scss';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="container projects">
        <div className="title">
          <h2><span>Recent Projects</span></h2>
        </div>
        <div className="row project-row">
          <div className="col-lg-6 col-sm-6 no-padding">
            <img className="debugmom-img img-fluid" src="images/debug.mom-img.png" alt="DEBUG.mom website picture"/>
          </div>
          <div className="col-lg-6 col-sm-6 text-inline">
            <h3>DEBUG.mom</h3>
            <p>A team project app created at Le Wagon Bootcamp. 
              It was made for non-tech-savvy people reaching out for help with everyday tech-related problems.
            </p>
            <hr/>
            <p className="web-links">
              <a href="http://www.debug-mom.com/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i> &gt; Website</a> 
            </p>
            <p className="web-links">
              <a href="https://github.com/Maxmulis/debug_mom" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> &gt; GitHub</a>
            </p>
          </div>
        </div> {/* #1row */}
        
        <div className="row project-row">
          <div className="col-lg-6 col-sm-6 text-inline">
            <h3>Flat Tires</h3>
            <p>A team Airbnb clone exercise-project created at Le Wagon Bootcamp. Made in order to exercise programming skills.</p>
            <hr/>
            <p className="web-links">
              <a href="https://flat-tires-platform.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i> &gt; Website</a> 
            </p>
            <p className="web-links">
              <a href="https://github.com/ipd39952/flat_tires_platform" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> &gt;  GitHub</a>
            </p>
          </div>
          <div className="col-lg-6 col-sm-6">
            <img className="flatTires-img" src="images/flatTires-img.png" alt="Flat-Tires website picture"/>
          </div>
        </div>
        {/* #2 row */}
          <div>
            <a className="btn btn-purple" href="/projects">
              <span>More projects here</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
