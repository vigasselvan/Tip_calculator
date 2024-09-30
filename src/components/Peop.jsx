import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

export default function Peop() {
  return (
    <div className='nofPpl'>
      <h3>Number Of People</h3>
          <FontAwesomeIcon icon={faUser} size='lg' className='userIcon'/>
      <input type="text" placeholder="" />
    </div>
  )
}
