import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const format = (timer)=>{
  const mins= Math.floor(timer/60);
  const secs = timer%60;
  return `${mins}:${secs<10?"0":""}${secs}`

}

function App() {
  const [isActivated, setActivated] = useState(false)
  const [timer, setTimer]= useState(0)

  const toggleHandler=()=>{
    setActivated(true)
  }
  useEffect(()=>{
    setInterval(()=>{
      if
      setTimer((prevTimer)=>prevTimer+1)
    },1000)
  },[isActivated, timer])

  return (
    <>
    <p>{format(timer)}</p>
    <button onClick={toggleHandler}>{isActivated? 'Stop' :'start'}</button>
    <button>reset</button>
      
    </>
  )
}

export default App
