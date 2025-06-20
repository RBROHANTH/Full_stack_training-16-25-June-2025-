import React from 'react'
import { useState } from 'react'
import './login.css'
const Login = () => {
const [formData,setFormData]=useState({
    email:'',
    password:''
})
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
        email:"",
        password:""
    })
}
const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
}
  return (<>
  <form action=''onSubmit={handleSubmit} className='container'>
    <div>LOGIN</div>
    <label>Email : </label>
    <input type='email' name ='email' value ={formData.email} onChange={handleChange}/><br></br>
    <label>Password : </label>
    <input type='password' name ='password' value ={formData.password} onChange={handleChange}/><br></br>
    <button type='submit'>LOGIN</button>
    </form>
    </>
  )
}

export default Login