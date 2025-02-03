import LearnComponent from "./components/LearnComponent"
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnProps from "./components/LearnProps"
import LearnState from "./components/LearnState";



function App() {
   let roll=12;
   const getData=(data)=>{
    console.log(data);
   }
  return (
    <>
     {/* <LearnComponent/> */}
     {/* <LearnJSX/> */}
     {/* <LearnProps name="Rostik" roll={roll}/> */}
    {/* <LearnEvent/> */}
    {/* <LearnLiftingStateUp myClick={getData}/> */}
    <LearnState/>
    </>
  )
}

export default App
