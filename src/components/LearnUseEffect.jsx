import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    const [count,setCount]=useState(0);
    const handleCount=()=>{
        setCount(count+1);
    }
    const [randomNumber,setRandomNumber]=useState(null);
    const generateRandomNumber=()=>{
            const newRandomNumber=Math.floor(Math.random() *100)+1;
            setRandomNumber(newRandomNumber);
    }

    // It runs each time when component is mounted and re-render
    // useEffect(()=>{
    //     console.log("Concept of useEffect here");
    // })


    //Runs once when the componet is mounted
    // useEffect(()=>{
    //     console.log("Concept of useEffect here");
    // },[])


    //Runs when the component is mounted and whenever dependencies changes 
//     useEffect(()=>{
//             console.log("Concept of useEffect here");
//     },[count]);


//     useEffect(()=>{
//         console.log("Concept of useEffect here");
//    },[count,randomNumber]);


//    The cleanup function (the function you return from useEffect) runs when the component unmounts or when the 
// dependencies in the dependency array change. Since count is in the dependency array, whenever count changes,
// the cleanup function is called before the new effects runs. 

   useEffect(()=>{
    console.log("Concept of useEffect here");
    return ()=>{
      console.log("Component will unmount");
    }
   },[count]);


  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={handleCount}>Increase Count</button>  
     <hr/>
     <h2> Random Number: {randomNumber}</h2>
     <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}

export default LearnUseEffect
