import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

const Collapse = (props) => {

  const [buttonIsTrue, setButtonIsTrue] = useState(true);
  const [iconIsTrue, setIconIsTrue] = useState(true);

  return (
    <>
      <button onClick={() => {
        setButtonIsTrue(!buttonIsTrue)
        setIconIsTrue(!iconIsTrue)
      }} className='more-info-btn grow'>
        <div className='info-text'>
          {
            buttonIsTrue ? 'More Info' : 'Less Info'
          }
        </div>
        <div>
          {props.info}
        </div>
      </button>
      {
        <div className={buttonIsTrue ? "more-info-container" : "more-info-container show"}>
          {
            buttonIsTrue ? '' :
              <Fade top>
                <p>{props.about}</p>
                <div className='contact-me'>
                  <h4>{props.phoneIcon} : {props.phone}</h4>
                  <h4>{props.mailIcon} : {props.email}</h4>
                </div>
              </Fade>
          }


        </div>
      }
    </>
  )
}

export default Collapse;