import { useState } from 'react'

export default function Tip() {
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);

  const handleClick = (id) =>{
    setClickedButtonId(id);
    this.props.funcTipAmount(clickedButtonId);
  }

  const tipChgFunc = (e) => {
    setTipAmount(e.target.value);
    this.props.funcTipAmount(tipAmount);
  }

  return (
    <div>
      <h3>Select Tip %</h3>

      <div className='tipButtons'>

        {
          [5, 10, 15, 25, 50].map((id)=>(
            <button key={id} onClick={()=>handleClick(id)} style={{
              backgroundColor: clickedButtonId == id ? 'hsl(172, 67%, 45%)' : '',
              color: clickedButtonId == id ? 'hsl(183, 100%, 15%)' : ''
            }}>{id}%</button>
          ))
        }
        <input type="text" placeholder="Custom" className='customTip' onChange={tipChgFunc}/>
      </div>
    </div>
  )
}
