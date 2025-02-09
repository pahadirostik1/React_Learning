
  import { useCustomCounter } from "../hooks/useCustomCounter" 
   const LearnCustomHook = () => {
    const {count, handleIncrement}=useCustomCounter();
     return (
       <>
        <h1> Count: {count}</h1>
        <button onClick={handleIncrement}>Increase button </button>
        
         </>
     )
   }
   
   export default LearnCustomHook
   