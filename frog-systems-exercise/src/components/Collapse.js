import React from 'react';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = (props) => {

  const [buttonIsExpanded, setButtonIsExpanded] = useState(true);

  return (
    <>
      <button onClick={() => {
        setButtonIsExpanded(!buttonIsExpanded);
      }} className='more-info-btn grow'>
        <div className='info-text'>
          {
            buttonIsExpanded ? 'More Info' : 'Less Info'
          }
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowDown} className={buttonIsExpanded ? 'info-icon is-rotated' : 'info-icon '} />
        </div>
      </button>
      {
        <div className={buttonIsExpanded ? "more-info-container" : "more-info-container show"}>
          {
            buttonIsExpanded ? '' :
              <Fade top>
                <p>{props.about}</p>
                <div className='contact-me'>
                  <h4 className='contact-text'>{props.phoneIcon} {props.phone}</h4>
                  <h4 className='contact-text'>{props.mailIcon} {props.email}</h4>
                </div>
              </Fade>
          }
        </div>
      }
    </>
  )
}

export default Collapse;