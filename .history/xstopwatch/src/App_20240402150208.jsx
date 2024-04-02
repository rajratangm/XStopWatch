import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const fomrat = (t)

function App() {
  const [isActivated, setActivated] = useState(false)
  const [timer, setTimer]= useState(0)

  return (
    <>
    <p>{format(timer)}</p>
    <button>{isActivated? 'Stop' :'start'}</button>
    <button>reset</button>
      
    </>
  )
}

export default App
