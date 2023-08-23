import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [counter, setcounter] = useState(0)

  function incriment(){
    setcounter(counter + 1)
  }
  function decriment(){
    setcounter(counter - 1)
  }
  return (
    <div className='app'>
      <h1>{counter}</h1>
      <div>
      <button onClick={incriment}>Incriment</button>
      <button onClick={decriment}>Decriment</button>
      </div>
      
    </div>
  )
}

export default App