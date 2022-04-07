import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

const Collapse = (props) => {

  const [buttonIsTrue, setButtonIsTrue] = useState(false);

  return (
    <>
      <button onClick={() => setButtonIsTrue(!buttonIsTrue)} className='more-info-btn grow'>
        More Info{props.info}
      </button>
      {
        buttonIsTrue ?
          <div className='more-info-container'>
            <Fade top>
              <p>{props.about}</p>
              <div className='contact-me'>
                <h4>{props.phoneIcon} : {props.phone}</h4>
                <h4>{props.mailIcon} : {props.email}</h4>
              </div>

            </Fade>
          </div>
          : ''
      }
    </>
  )
}

export default Collapse;