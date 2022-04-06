import React, { useState } from 'react';
import Users from '../user.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const facebook = <a href={'https://www.facebook.com/frogsystems'} target="_blank" className="social-links">< FontAwesomeIcon icon={faFacebook} size="2x" /></a>
const linkedIn = <a href={'https://www.linkedin.com/company/frog-systems-ltd'} target="_blank" className="social-links">< FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
const twitter = <a href={'https://twitter.com/frogsystemsltd'} target="_blank" className="social-links">< FontAwesomeIcon icon={faTwitter} size="2x" /></a>

const info = < FontAwesomeIcon icon={faInfo} pull="right" className='info-icon' />

const phoneIcon = < FontAwesomeIcon icon={faPhone} />
const mailIcon = < FontAwesomeIcon icon={faEnvelope} />

const Card = () => {
  const [buttonIsTrue, setButtonIsTrue] = useState(false)
  return (
    Users && Users.map((item) =>
      <div key={item.name} className="card-container">
        <div div className='card-container' >
          <div className='upper-container'>
            <div className='img-container'>
              <img className='img-character' src={item.image} alt="" />
            </div>
          </div>
          <div className='lower-container'>
            <h1>{item.name}</h1>
            <p className='department-text'>{item.department}</p>
            <h2>{item.company}</h2>
            <div className='socials-container'>
              {facebook} {linkedIn} {twitter}
            </div>
            <button onClick={() => setButtonIsTrue(!buttonIsTrue)} className='more-info-btn'>
              More Info{info}
            </button>
            {
              buttonIsTrue ? <span>
                <div className='more-info-container'>
                  <Fade top>
                    <h4>{phoneIcon} : {item.moreInfo.phone}</h4>
                    <h4>{mailIcon} : {item.moreInfo.email}</h4>
                  </Fade>
                </div>
              </span> : ''
            }
          </div>
        </div>
      </div>
    )
  )
}

export default Card

