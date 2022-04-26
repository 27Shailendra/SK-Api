import React, { useState } from 'react'

const RulesHook = () => {
    const[myname,setmyname]=React.useState('sk');
    // const change=()=>{
    //  myname==='sk'?setmyname('Shailu'):setmyname('sk');
    // }
  return (
    <div>
        <h1>{myname}</h1>
    </div>
  )
}

export default RulesHook