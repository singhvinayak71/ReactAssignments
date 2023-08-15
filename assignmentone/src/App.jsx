import React from 'react'
import { Person } from './components/Person'
import Button from './components/Button'
import Header from './components/Header'
import LIst from './components/LIst'

const App = () => {
  return (
    <div>
      <Header
      title = 'Hello i am Header'
      />

      <Person
      name = 'vinayak singh'
      age = '26'
      />
      <LIst
      items = {["HTML", "CSS", "JavaScript", "React"]}
      />
      <Button
      text = 'Click Me'
      onClick = {()=> alert('Button has been clicked')}
      />
     
      
    </div>
  )
}

export default App