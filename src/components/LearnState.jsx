import React,{ useState } from 'react'

const LearnState = () => {
    const [num,setNum]=useState(0);
    console.log("Number is " , num);
    const handleClick=(e)=>{
        e.preventDefault();
        setNum(num+1);
    }
    const [position, setPosition]=useState({x:1,y:2});
    console.log("Postition",position)

    const handlePosition=(e)=>{
        setPosition({x:position.x+1,y:position.y+1});
        <h1>Position is {position}</h1>
    }
  return (
    <>
      <h1>Number is {num}</h1>
      <button onClick={handleClick}>Click here</button>
      <button onClick={handlePosition}>Update position</button>
      <h1>Position: {position.x} and {position.y}</h1>
    </>
  )
}

export default LearnState


