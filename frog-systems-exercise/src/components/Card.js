import React from 'react';
import Users from '../user.json';
import Collapse from './Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const phoneIcon = < FontAwesomeIcon icon={faPhone} />
const mailIcon = < FontAwesomeIcon icon={faEnvelope} />

const Card = () => {

  return (
    Users && Users.map((item) =>
      <div key={item.id} className="card-container">
        <div className='upper-container'>
          <img className='img-character' src={item.image} alt="" />
        </div>
        <div className='lower-container'>
          <h2 className='person-name'>{item.name}</h2>
          <p className='department-text'>{item.department}</p>
          <h3>{item.company}</h3>
          <div className='socials-container'>
            <a href={item.facebook} target="_blank" rel="noreferrer" className="social-links social-facebook grow">< FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href={item.linkedin} target="_blank" rel="noreferrer" className="social-links social-linkedin grow">< FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href={item.twitter} target="_blank" rel="noreferrer" className="social-links social-twitter grow">< FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          </div>
          <Collapse key={item.id} phoneIcon={phoneIcon} mailIcon={mailIcon} phone={item.moreInfo.phone} email={item.moreInfo.email} about={item.moreInfo.about} />
        </div>
      </div>
    )
  )
}

export default Card

