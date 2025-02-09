import CounterApp from "./components/CounterApp";
import LearnComponent from "./components/LearnComponent"
import LearnCustomHook from "./components/LearnCustomHook";
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnProps from "./components/LearnProps"
import LearnState from "./components/LearnState";
import LearnUseCallback from "./components/LearnUseCallback";

import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";



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
     {/* <LearnState/> */}
     {/* <CounterApp/> */}
     {/* <LearnUseEffect/> */}
     {/* <LearnUseMemo/> */}
     {/* <LearnUseCallback/> */}
     <LearnCustomHook/>
    </>
  )
}

export default App
