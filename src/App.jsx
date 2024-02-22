import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')

  const button = (value) => {
    setDisplay(display + value);
  }

  const deleteOne = () => {
    setDisplay(display.slice(0, -1));
  }

  const clearDisplay = () => {
    setDisplay('');
  }

  const equals = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("Error")
    }
  }

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="displayInput">
            <input type="text" value={display} disabled />
          </div>
          <div className="buttonsContainer">
            <button className='specialBtn' onClick={clearDisplay}>AC</button>
            <button className='specialBtn' onClick={deleteOne}>DEL</button>
            <button onClick={() => button('.')}>.</button>
            <button className='specialBtn' onClick={() => button('/')}>/</button>

            <button onClick={() => button('7')}>7</button>
            <button onClick={() => button('8')}>8</button>
            <button onClick={() => button('9')}>9</button>
            <button className='specialBtn' onClick={() => button('*')}>*</button>

            <button onClick={() => button('4')}>4</button>
            <button onClick={() => button('5')}>5</button>
            <button onClick={() => button('6')}>6</button>
            <button className='specialBtn' onClick={() => button('+')}>+</button>

            <button onClick={() => button('1')}>1</button>
            <button onClick={() => button('2')}>2</button>
            <button onClick={() => button('3')}>3</button>
            <button className='specialBtn' onClick={() => button('-')}>-</button>

            <button onClick={() => button('00')}>00</button>
            <button onClick={() => button('0')}>0</button>
            <button className='specialBtn' id='gridSpanner' onClick={equals}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App