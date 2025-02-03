// import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <>
//       <h1>Welcome to learn the props concept in react</h1>
//       <h2> How are you {props.name}?</h2>
//       <h3> Your roll number is  {props.roll}?</h3>
//     </>
//   )
// }

// export default LearnProps

import React from 'react'
import App from '../App'

const LearnProps = ({name,roll}) => {
    
  return (
    <>
      <h1>Welcome to learn the props concept in react</h1>
      <h2> How are you {name}?</h2>
      <h3> Your roll number is  {roll}?</h3>
    </>
  )
}

export default LearnProps
