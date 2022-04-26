import React from 'react'

const UseStateArray = () => {

const biodata=[
    {
          id:0,myname:"sagar",age:20
    },{
          id:1,myname:"shubham",age:30
    }
    ,{
          id:2,myname:"aman",age:40
    }
    ,{
          id:3,myname:"suraj",age:50
    }
]
// console.log(biodata);

 const[myarray,setarray] =React.useState(biodata);

  const clearArray=()=>{
      setarray([]);
  }

  const Remove =(id)=>{
    //   alert(id);
    const mynewArry=myarray.filter((curelem)=>{
        return curelem.id !== id;
    })
    setarray(mynewArry);
  }
  return (
      <>
      {
          myarray.map((curelem)=>{
          return(
          <h1>id :{curelem.id}  Name :{curelem.myname} & Age {curelem.age}
          <button onClick={ ()=>Remove(curelem.id)}>Remove</button>
          </h1>
          
          )}
          )
          
      }
      <button onClick={clearArray}>Clear</button>
      </>
  )
}

export default UseStateArray