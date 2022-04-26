import React from 'react'

const UserStateObject = () => {
    const[myobj,setobj]=React.useState({name:"vinod thapa",age:22});
   
    const changeObject=()=>{
         setobj({...myobj,myobj:"sagar"});
    }
  return (
    <div>
        <h1>
        Name:{myobj.name} & Age:{myobj.age}
        <button onClick={changeObject}>Change</button>
        </h1>
    </div>
  )
}

export default UserStateObject