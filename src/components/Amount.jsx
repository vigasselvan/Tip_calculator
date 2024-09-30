import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'; 

export default function Amount() {

  const [billAmount, setBillAmount] = useState(0);    //bill amount

  const billChgFunc = (e) => {
    setBillAmount(e.target.value);
  }

  //now need to send the amount to the parent component - find the way.

  return (
    <div>
        <h3>Bill</h3>
        <span className='alignDollar'>
          <FontAwesomeIcon icon={faDollarSign} size='lg' className='doll'/>
        </span>
        <input type="text" onChange={billChgFunc}/>
    </div>
  )
}
