import React,{useState} from 'react'
// import RulesHook from './components/RulesHook';
import UseStateArray from './components/UseStateArray';
import UserStateObject from './components/UserStateObject';
import ComA from './components/ComA';
import Material from './components/Material';
import ShortCircuit from './components/ShortCircuit';
import Login from './components/Login';
import UseEffects  from './components/Useffect/UseEffects';
import UseEffect2  from './components/Useffect/UseEffect2';
import UseEffectApi from './components/Useffect/UseEffectApi';
export default function App() {
 
//  const [val,setval]=useState('thapa technical');

  //  const change =()=>{
    //  let myval=val;

    // val==='thapa technical'?setval('shailendra'):setval('thapa technical');

    //  if(val==='thapa technical'){
    //    setval("shailendra kaithwas");
    //  }else{
    //    setval('thapa technical');
    //  }
    // console.log(val);
  // }

  return (
    <div>
    {/* <h1>{val}</h1> */}
    {/* <button onClick={change}>Click Me</button> */}
   
   {/* <RulesHook/> */}
   {/* <UseStateArray/> */}
   {/* <UserStateObject/> */}
   {/* <ComA/> */}
   {/* <Material/> */}
   {/* <ShortCircuit/> */}
   {/* <Login/> */}
   {/* <UseEffects/> */}
   {/* <UseEffect2/> */}
   <UseEffectApi/>
    </div>
  )
}
