import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const format = (timer)=>{
  const mins= Math.floor(timer/60);
  timer = timer%60;
  return `${mins}:${timers<10}`

}

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
