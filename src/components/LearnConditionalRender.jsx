import React,{ useState} from 'react'

const LearnConditionalRender = () => {
     const status=true;
     const [isLogin, setIsLogin]=useState(false);
  return (
    <>
      {status && <h1>It is true here</h1>} 
      {isLogin?(<>
            <h1>This is true</h1>
            <button onClick={()=>setIsLogin(false)}>LogOut </button>
            </>)
            :(<>
            <h2>This is false</h2>
            <button onClick={()=> setIsLogin(true)}>Login</button>
            </>)}
    </>
  )
}

export default LearnConditionalRender
  