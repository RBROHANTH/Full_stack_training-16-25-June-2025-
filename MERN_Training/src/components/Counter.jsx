import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button><br></br>

    <button onClick={() => setCount(count - 1)}>Decrement</button><br></br>
    
    <button onClick={() => setCount(0)}>RESET</button>
    </>
  )
}

export default Counter