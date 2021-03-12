import React from 'react';
import './ProjectsPortfolio.scss';
import './Button.scss'

function ProjectsPortfolio() {
  return (
    <section className="card-palette">
      <main className="page-content">
      {/* CONTACT FORM PROJECT */}
      <div className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/images/project-contactForm-img.png)"}}>
          <div className="content">
            <h2 className="title">Contact Form</h2><hr/>
            <p className="copy">A fully responsive contact form. Created with grid layout and Slack API.</p><hr/>
            <a className="btn-sm-purple" href="https://kristina-space.netlify.app/contact" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
      {/* FLAT TIRES PROJECT */}
        <div className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1568775376697-e16970e74861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)"}}>
          <div className="content">
            <h2 className="title">Flat Tires</h2><hr/>
            <p className="copy">A team made Airbnb clone exercise-project made in order to exercise programming skills.</p>
            <a className="btn-sm-purple" href="https://flat-tires-platform.herokuapp.com/" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        {/* DEBUG.mom PROJECT */}
        <div className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/images/project-debugmom-img.png)"}}>
          <div className="content">
            <h2 className="title">DEBUG.mom</h2>
            <p className="copy">A team made app for non-tech-savvy people reaching out for help with everyday tech-related problems.</p>
            <a className="btn-sm-purple" href="http://www.debug-mom.com/" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        {/* JS DRUM KIT PROJECT */}
        <div id="form-project" className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/images/project-drum-kit.png)"}}>
          <div className="content">
            <h2 className="title">JS Drum Kit </h2><hr/><hr/>
            <p className="copy">A Drum Kit build with plain JavaScript.</p>
            <a className="btn-sm-purple" href="https://kristina-z-drum-kit.netlify.app/" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        {/* SURVEY FORM PROJECT */}
        <div id="form-project" className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/images/project-survey-img.png)"}}>
          <div className="content">
            <h2 className="title">Survey Form</h2><hr/><hr/>
            <p className="copy">Survey form made using Bootstrap & SASS.</p>
            <a className="btn-sm-purple" href="https://codepen.io/1Kris1/full/rNMxqdP" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        {/* LANDING PAGE PROJECT */}
        <div id="form-project" className="card card-img" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(/images/project-productPage-img.png)"}}>
          <div className="content">
            <h2 className="title">Product Landing Page</h2>
            <p className="copy">Responsive Product Landing Page made using SASS and Grid system.</p>
            <a className="btn-sm-purple" href="https://codepen.io/1Kris1/full/gOwMppY" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        {/* NEW PROJECT */}
        <div className="card">
          <div className="content">
            <h2 className="title">Upcoming project</h2>
            <p className="copy"></p>
            <button className="btn-sm-purple">View</button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProjectsPortfolio;
