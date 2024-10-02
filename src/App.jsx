import { useState } from 'react'
import Amount from './components/Amount.jsx'
import Tip from './components/Tip.jsx'
import Peop from './components/Peop.jsx'
import TipAmount from './components/TipAmount.jsx'
import TotalPrice from './components/TotalPrice.jsx'
import ResetButton from './components/ResetButton.jsx'

function App() {
  const [billAmount, setBillAmount] = useState(0);    //bill amount
  const [foodTip, setFoodTip] = useState(0);    //tip percentage
  const [people, setPeople] = useState(0);    //number of people
  const [bill, setBill] = useState(0);    //final bill per person
  const [tipAmount, setTipAmount] = useState(0);    //tip amount per person


  //now each time the changes made in the billAmount, tip, people, the other values should change
  //write code to call the functions, when values are changed.
  
  const calculateTip = () => {
    setTipAmount( (billAmount * (foodTip/100)) /people);
  }

  const calculateBill = () => {
    setBill( (billAmount / people) + tipAmount);
  }
  
  return (
    <>
      <div className='webpage'>
        <div className='inputSide'>
          <Amount funcBillAmount={setBillAmount()}/>  {/* trying to insert the value directly*/}
          <Tip functTipAmount={setFoodTip()}/>
          <Peop funcPeopleAmount={setPeople()}/>
        </div>
        <div className="outputSide">
          <TipAmount tipPerHead={tipAmount}/>
          <TotalPrice billPerHead={bill}/>
          <ResetButton />
        </div>
      </div>
    </>
  )
}

export default App
