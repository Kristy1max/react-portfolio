import React from 'react';
import '../Contact.scss';


function Contact() {
  return (
    <div className="container contact">
      <div className="form">
        <div className="contact-info"></div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html">
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input type="text" name='name' className='input'/>
              <label htmlFor="">Name</label>
            </div>
            <div className="input-container">
              <input type="email" name='email' className='input'/>
              <label htmlFor="">Email</label>
            </div>
            <div className="input-container">
              <input type="text" name='name' className='input'/>
              <label htmlFor="">Subject</label>
            </div>
            <div className="input-container textarea">
              <textarea type="text" name='message' className='input'/>
              <label htmlFor="">Message</label>
            </div>
            <input type="submit" value="Send" className='btn'/>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact;
