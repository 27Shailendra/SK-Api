import React, { useEffect ,useState} from 'react'

const UseEffects = () => {

   const [count,setcount]=useState(0);


   useEffect(()=>{  //We cannot use hooks conditionally
  if(count>=1){
      document.title=`chats (${count}❤)`;
    }else{
        document.title=`chats`;

    }
         // console.log("hello UseEffects");  //It is also called side effects
      
       });


   console.log("hello Outside");

  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={()=>setcount(count+1)}>Click😂</button>
    </div>
  )
}
//Use effecct is automatically called when the page is reload.
//And when we use useState it Re-render the component.
export default UseEffects