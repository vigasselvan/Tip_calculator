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

  
  return (
    <>
      <div className='webpage'>
        <div className='inputSide'>
          <Amount />
          <Tip />
          <Peop />
        </div>
        <div className="outputSide">
          <TipAmount />
          <TotalPrice />
          <ResetButton />
        </div>
      </div>
    </>
  )
}

export default App
