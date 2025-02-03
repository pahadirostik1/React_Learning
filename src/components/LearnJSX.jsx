import React from 'react'

const LearnJSX = () => {
    let model="G1223"
  return (
    <>
      <h1>This is the JSX concept</h1>
      <h2> Welcom to JSX concept</h2>
      {/* Javascript Expresxion */}
      <h3>The sum is : {10+20}</h3>
      <h4>The model is : {model}</h4>

      {/* Attributes */}
      <h1 className='bg-primary'> This is an attributes</h1>
      <h1 className={model}>Learn JSX</h1>
    </>
  )
}

export default LearnJSX
