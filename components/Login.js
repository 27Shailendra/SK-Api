import React, { useState } from 'react'

const Login = () => {
    const [email,setMail]=useState("");
    const [password,setPassword]=useState("");

    const [allEntry,setAllEntry] =useState([]);
  
    const submitForm=(e)=>{
        e.preventDefault();

        if(email && password){  //if both are true then it will login
        const newEntry={ id:new Date().getTime().toString(), email:email,password:password};
       
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);

        setMail("");
        setPassword("");
    }else{
        alert("Plz fill the data");
    }
}

  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' autoComplete='off' value={email} onChange={(e)=>setMail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
        </form>

        <div>
            {
                allEntry.map((curElem)=>{
                    const { id,email,password}=curElem;
                    return(
                        <div key={id}>
                           <span> Username :{email}  Password :{password}</span>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Login