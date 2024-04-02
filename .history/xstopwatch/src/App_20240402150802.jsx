import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const format = (timer)=>{
  const mins= Math.floor(timer/60);
  timer = timer%60;
  return `${mins}:${timer<10?"0":""}${timer}`

}

function App() {
  const [isActivated, setActivated] = useState(false)
  const [timer, setTimer]= useState(0)

  const toggleHandler=()=>{
    setActivated(true)
  }
  useEffect(()=>{
    setActivated
  })

  return (
    <>
    <p>{format(timer)}</p>
    <button onClick={toggleHandler}>{isActivated? 'Stop' :'start'}</button>
    <button>reset</button>
      
    </>
  )
}

export default App
