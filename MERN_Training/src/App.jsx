import React from 'react'
// import Child from './components/Child'
// import Contact from './pages/contact'
// import About from './pages/about'
// import Skills from './pages/skills'
import Home from './pages/home'
// import './pages/home.css'
import './app.css'
import Counter from './components/counter'


const App = () => {
  // const skills = ["Game dev", "React", "etc."];
  const login = {uname : "RBR",password:"12334"}
  return (<>
    <div  className='container'>
      {/* <div>
        App
        <Child name="RBR" age="45" DEPT="AGRI" />
        <Child name="djfhbvbfvu" age="23" DEPT="IT" />
        <Contact name="Nihil" />
      </div>
      <About />
      <Skills skills={skills}  /> */}
      <Home login = {login}/>
    </div>
    <Counter/>
    </>
  )
}

export default App