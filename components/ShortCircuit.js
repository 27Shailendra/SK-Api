import React, { useState } from 'react'

const ShortCircuit = () => {
    const [demo,setDemo] = useState("world");
  return (
    <div>
        <h1>{demo || "hello"}</h1>
        <h1>{demo && "hello"}</h1>
    </div>
  )
}

export default ShortCircuit