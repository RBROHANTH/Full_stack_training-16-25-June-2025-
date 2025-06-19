import React from 'react';
import './home.css';

function Home({login}) {
  function Login(){
  if (document.getElementById('name').value == login.uname && document.getElementById('PASSWORD').value == login.password)
  {
      document.getElementById('res').style.color = "green";
      document.getElementById('res').innerHTML= "successfully Submited";
  }else
  {
      document.getElementById('res').style.color="red"
      document.getElementById('res').innerHTML= "User name or password is worng"
  }
}
  return (
    // <div className='container'>
    <div>
      <h1>login</h1>
      <label>USERNAME</label>
      <input id='name' type='text' placeholder='Enter your name'></input><br></br><br></br>
      <label>PASSWORD</label>
      <input id='PASSWORD' type='PASSWORD' placeholder='Enter the PASSWORD'></input><br></br><br></br>
      <button className='button1' onClick={Login}>Login</button>
      <div id='res'></div>
    </div>
  )
}

export default Home