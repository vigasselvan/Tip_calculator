import Amount from './components/Amount.jsx'
import Tip from './components/Tip.jsx'
import Peop from './components/Peop.jsx'

function App() {

  return (
    <>
      <div className='webpage'>
        <div className='inputSide'>
          <Amount />
          <Tip />
          <Peop />
        </div>
        <div className="outputSide">
          <h3>Result</h3>
        </div>
      </div>
    </>
  )
}

export default App
