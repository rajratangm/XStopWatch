import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isActivated, setActivated] = useState(false)

  return (
    <>
    <button>{isActivated? Stop :start'}</button>
      
    </>
  )
}

export default App
