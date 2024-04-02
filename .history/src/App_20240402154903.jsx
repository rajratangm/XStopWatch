import React, { useEffect, useState } from 'react';
// import './App.css';

const format = (timer) => {
  const mins = Math.floor(timer / 60);
  const secs = timer % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

function App() {
  const [isActivated, setActivated] = useState(false);
  const [timer, setTimer] = useState(0);

  const toggleHandler = () => {
    setActivated((prevActivated) => !prevActivated);
  };

  const resetHandler = () => {
    setTimer(0);
    setActivated(false);
  };

  useEffect(() => {
    let intervalId;
    if (isActivated) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount or when isActivated changes
  }, [isActivated]);

  return (
    <>
    <h1>Stopwatch</h1>
      <p>Timer: {format(timer)}</p>
      <button onClick={toggleHandler}>{isActivated ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}

export default App;
