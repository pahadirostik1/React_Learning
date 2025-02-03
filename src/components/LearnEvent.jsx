import React from 'react'

const LearnEvent = () => {
    const handleClick1=(e)=>{
        e.preventDefault();
        console.log("Button1 is clicked")
    }
    const handleClick2=(myID)=>{
       
        console.log("Button 2 is clicked",myID)
    }

  return (
    <>
      {/* without arguments */}
        <button onClick={handleClick1}>This is button 1</button>
      {/* with arguments */}
      <button onClick={(e)=>handleClick2("myID")}>This is button 2</button>

    </>
  )
}

export default LearnEvent





