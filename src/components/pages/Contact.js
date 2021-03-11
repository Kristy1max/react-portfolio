import React, { useState } from 'react';
import axios from 'axios';
import '../Contact.scss';

function Contact() {
  // Setting up connection of Slack with Contact Form---------------->
  const [name, setName] = useState(''); //here
  const [email, setEmail] = useState(''); //here
  const [phone, setPhone] = useState(''); //here
  const [subject, setSubject] = useState(''); //here
  const [message, setMessage] = useState(''); //here

  async function submitForm(e) {
    e.preventDefault();
    const webHookURL = "https://hooks.slack.com/services/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";

    const data = {
      "text": `NAME: ${name}\n EMAIL: ${email}\n PHONE: ${phone}\n SUBJECT: ${subject}\n MESSAGE: ${message}`
    }
    
    let res = await axios.post(webHookURL, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [(data, headers) => {
        delete headers.post["Content-Type"];
        return data;
      }]
    })

    if (res.status === 200) {
      alert("Message sent!")

      // Clear state after submission
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      alert("Error sending a message. Please try again later!")
    }
  }

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
        </div>{/* END .contact-info */}

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form 
            action="index.html" 
            name="contact" 
            onSubmit="submit"
            >

            <h3 className="title">Contact me</h3>
            <div className="input-container"> {/* name */}
              <input 
                id="name" 
                type="text" 
                name="name" 
                className="input"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
              <label htmlFor="name">Name</label>
              <span>Name*</span>
            </div>
            <div className="input-container"> {/* email */}
              <input 
                id="email" 
                type="email" 
                name="email" 
                className="input"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <label htmlFor="email">Email</label>
              <span>Email*</span>
            </div>
            <div className="input-container"> {/* phone */}
              <input 
                id="phone" 
                type="tel" 
                name="phone" 
                className="input"
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
              />
              <label htmlFor="phone">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container"> {/* subject */}
              <input 
                id="subject" 
                type="text" 
                name="name" 
                className="input"
                value={subject}
                onChange={(e) => {setSubject(e.target.value)}}
                />
              <label htmlFor="subject">Subject</label>
              <span>Subject</span>
            </div>
            <div className="input-container textarea"> {/* message */}
              <textarea 
                id="message" 
                type="text" 
                name='message' 
                className="input"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
              />
              <label htmlFor="message">Message</label>
              <span>Message*</span>
            </div>
            <button 
              type="submit" 
              value="Send"
              className="btn"
              onClick={(e) => submitForm(e)}
            >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
