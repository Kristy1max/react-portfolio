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
        </div>{/* .contact-info */}

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete='off'>
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input type="text" name='name' className='input'/>
              <label htmlFor="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" name='email' className='input'/>
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name='phone' className='input'/>
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container">
              <input type="text" name='name' className='input'/>
              <label htmlFor="">Subject</label>
              <span>Subject</span>
            </div>
            <div className="input-container textarea">
              <textarea type="text" name='message' className='input'/>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className='btn'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
