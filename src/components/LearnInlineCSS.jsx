import React from 'react'

const LearnInlineCSS = () => {
  const btnStyle={
    color:'blue',
    backgroundColor: 'orange'
  }
  return (
    <>
      <p style={{fontSize:'20px',color:'blue' }}> Hello react with inline CSS concept</p>
      <button style={btnStyle}>Click button</button> <br/><br/>
      <button style={{...btnStyle,...{fontSize:'50px'}}}>Next Button</button>
    </>
  )
}

export default LearnInlineCSS
