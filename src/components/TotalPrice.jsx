import React from 'react'

export default function TotalPrice() {
    
  const PricePerPerson = 32.79;

  return (
    <div className='priceAmountArea'>
            <div className='textArea'>
                <h3>Total</h3>
                <p>/ person</p>
            </div>
            <div className='priceArea'>
                <h1>${PricePerPerson}</h1>
            </div>
    </div>
  )
}
