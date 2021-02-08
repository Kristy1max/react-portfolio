import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <section className='footer-container'>
      <div className="footer-copyright">
        <p>Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2021</p>
        <p>
          Made with <i className="fas fa-heart"></i> by Kristina Zhizherina
        </p>
      </div>
      <div className="footer-social-links">
        <p> Follow me on </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/kristina-zhizherina-8392631a5/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/Kristy1max" target="_blank" rel="noreferrer" ><i className="fab fa-github-alt"></i></a></li>
          <li><a href="https://www.instagram.com/kristy.kz/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul> 
      </div>
    </section> // #footer
  );
}

export default Footer;
