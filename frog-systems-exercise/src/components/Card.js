import React from 'react';
import Users from '../user.json';
import Collapse from './Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const facebook = <a href={'https://www.facebook.com/frogsystems'} target="_blank" className="social-links social-facebook grow">< FontAwesomeIcon icon={faFacebook} size="2x" /></a>
const linkedIn = <a href={'https://www.linkedin.com/company/frog-systems-ltd'} target="_blank" className="social-links social-linkedin grow">< FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
const twitter = <a href={'https://twitter.com/frogsystemsltd'} target="_blank" className="social-links social-twitter grow">< FontAwesomeIcon icon={faTwitter} size="2x" /></a>

const info = < FontAwesomeIcon icon={faInfo} pull="right" className='info-icon' />

const phoneIcon = < FontAwesomeIcon icon={faPhone} />
const mailIcon = < FontAwesomeIcon icon={faEnvelope} />

const Card = () => {

  return (
    Users && Users.map((item) =>
      <div key={item.id} className="card-container">
        <div className='upper-container'>
          <div className='img-container'>
            <img className='img-character' src={item.image} alt="" />
          </div>
        </div>
        <div className='lower-container'>
          <h2 className='person-name'>{item.name}</h2>
          <p className='department-text'>{item.department}</p>
          <h3>{item.company}</h3>
          <div className='socials-container'>
            {facebook} {linkedIn} {twitter}
          </div>
          <Collapse key={item.id} phoneIcon={phoneIcon} mailIcon={mailIcon} phone={item.moreInfo.phone} email={item.moreInfo.email} about={item.moreInfo.about} info={info} />
        </div>
      </div>
    )
  )
}

export default Card

