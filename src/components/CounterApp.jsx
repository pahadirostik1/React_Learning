import React, { useState } from 'react'

const CounterApp = () => {
    const [Count,setCount]=useState(0);
    const handleCount=()=>{
        // setCount(Count+1);
        setCount((prevCount)=>prevCount+1);
    }
    const resetCount=()=>{
        setCount(0);
    }
  return (
    <>
       <h1>Count:{Count} </h1>
       <button onClick={handleCount}>Increase Count</button>
       <button onClick={resetCount}>Reset Count</button>
    </>
  )
}

export default CounterApp
