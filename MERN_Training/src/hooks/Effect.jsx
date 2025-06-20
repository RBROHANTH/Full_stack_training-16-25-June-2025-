import React, { useEffect,useState } from 'react'

const Effect = () => {
  const [count,setCount]=useState(0);
  // useEffect(()=>{
  //   console.log("UseEffect Rendered")
  // },[count])
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count*100)
    },0.1)
  },[count])
  const handleIncrement =()=>{
    setCount(count+1);
}
const handleDecrement =()=>{
    setCount(count-1);
}
const handlereset =()=>{
    setCount(0);
}
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handleIncrement}> Increment </button>
</div>
  )
}

export default Effect