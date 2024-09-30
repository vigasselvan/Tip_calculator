import React from 'react'

export default function TipAmount() {
    const TipPerPerson = 4.27;

  return (
        <div className='tipAmountArea'>
            <div className='textArea'>
                <h3>Tip Amount</h3>
                <p>/ person</p>
            </div>
            <div className='priceArea'>
                <h1>${TipPerPerson}</h1>
            </div>
        </div>
  )
}
