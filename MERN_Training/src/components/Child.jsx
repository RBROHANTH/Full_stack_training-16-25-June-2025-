import React from 'react'

const Child = (pro)=>  {
  return (
    <div>
      Child
        <h1>name = {pro.name}</h1>
        <h1>Age = {pro.age}</h1>
        <h1>DEPT = {pro.DEPT}</h1>
    </div>
  )
}

export default Child