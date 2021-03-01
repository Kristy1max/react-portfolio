import React from 'react';
import '../Contact.scss';

function Contact() {
// JS focus label animation in process...

// const inputs = document.querySelectorAll('.input');

//   function focusFunc() {
//       let parent = this.parentNode;
//       parent.classList.add('focus');
//   }

//   function blurFunc() {
//       let parent = this.parentNode;
//       if (this.value == '') {
//       parent.classList.remove('focus');
//     } 
//   }

//   inputs.forEach((input) => {
//     input.addEventListener('focus', focusFunc);
//     input.addEventListener('blur', blurFunc);
//   });

  return (
    <div className="container contact">
    <span className="big-circle"></span>
    <img className="send-icon" src="../images/send-icon.png" alt=""/>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let&apos;s get in touch</h3>
          <div className="info">
            <div className="information">
              <i className="fas fa-map-marked-alt fa-2x"></i>
              <p>Frankfurt am Main, Germany</p>
            </div>
            <div className="information">
              <i className="fas fa-at fa-2x"></i>
              <p>kristina.zhizherina@gmail.com</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with me: </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/kristina-zhizherina-8392631a5" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://github.com/Kristy1max" target="_blank" rel="noreferrer">
                <i className="fab fa-github-alt fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/kristy.kz/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>{/* .contact-info */}

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form 
            action="index.html" 
            name="contact v1" 
            method="POST" 
            data-netlify="true"
            onSubmit="submit"
            >
            <input type="hidden" name="form-name" value="contact v1"/>
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input id="name" type="text" name='name' className='input'/>
              <label htmlFor="name">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input id="email" type="email" name='email' className='input'/>
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input id="phone" type="tel" name='phone' className='input'/>
              <label htmlFor="phone">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container">
              <input id="subject" type="text" name='name' className='input'/>
              <label htmlFor="subject">Subject</label>
              <span>Subject</span>
            </div>
            <div className="input-container textarea">
              <textarea id="message" type="text" name='message' className='input'/>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <button type="submit" value="Send" className='btn'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
