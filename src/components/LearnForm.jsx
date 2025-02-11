 import { useState } from "react"

const LearnForm = () => {
    // const [firstName,setFirstName]=useState('');
    // const [lastName,setLastName]=useState('');
    // const handleFirstName=(e)=>{
    //     setFirstName(e.target.Value);
    // }
    // const handleLastName=(e)=>{
    //     setLastName(e.target.Value);
    // }

    const [formData,setFormData]=useState({
      firstName: '',
       lastName: ''
    })

    const handleChange=(e)=>{
      setFormData({...formData, [e.target.name]:e.target.value})
    }

    // Handle Form on Submit
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      console.log("Submit Button Clicked", formData)
    }
  return (
    <>
    {/* Handle element one by one */}
      {/* <form action="">
        <label htmlFor="first">First Name:</label> 
        <input type="text" id="first" name="firstName" Value={firstName} onChange={handleFirstName}/><br/><br/>
        <label htmlFor="last">Last Name:</label>
         <input type="text" id="last" name="lastName" Value={lastName} onChange={handleLastName}/><br/><br/>

      </form> */}


        {/* Handle all elements at once */}
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="first">First Name:</label> 
        <input type="text" id="first" name="firstName" value={formData.firstName} onChange={handleChange}/><br/><br/>
        <label htmlFor="last">Last Name:</label>
         <input type="text" id="last" name="lastName" value={formData.lastName} onChange={handleChange}/><br/><br/>
        <button type='submit'> Submit</button>
      </form>
    </>
  )   
}

export default LearnForm
