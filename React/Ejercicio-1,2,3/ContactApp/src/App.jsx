import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact_List from './components/Contact_List'
import HelloWorldComponent from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Contact_List />

    </div>
  )
}

export default App
