import React from 'react'

const LearnLiftingStateUp = (props) => {

    const handleClick=(e)=>{
        e.preventDefault();
        let data="I am Rostik Pahadi"
        props.myClick(data);
    }
  return (
    <>
       <button onClick={handleClick}>Button1</button>
    </>
  )
}

export default LearnLiftingStateUp
