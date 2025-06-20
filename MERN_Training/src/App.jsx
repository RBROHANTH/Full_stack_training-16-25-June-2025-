import React from 'react'
import Child from './components/Child'
import Contact from './pages/contact'
import About from './pages/about'
import Skills from './pages/skills'
import Home from './pages/home'
import './pages/home.css'
import './app.css'
import Counter from './components/counter'
import Navbar from './components/navbar'
import { Route, Routes,Link } from 'react-router-dom'
import Hooks from './hooks/hooks'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Ecpect_2 from './hooks/ecpect_2'
import Login from './pages/Login'


const App = () => {
   const skills = ["Game dev", "React", "etc."];
  const login = {uname : "RBR",password:"12334"}
  return (<>
  
    <div className='container'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home login={login} />} />
        <Route path='/contact' element={<Contact name="Nihil" />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={  <Skills skills={skills}  />} />
        <Route path='/child' element={ <Child name="djfhbvbfvu" age="23" DEPT="IT" /> } />
        <Route path='/counter' element={  <Counter/>} />
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Ecpect_2/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
                    {/* <div>
                      App
                      <Child name="RBR" age="45" DEPT="AGRI" />
                      <Child name="djfhbvbfvu" age="23" DEPT="IT" />
                      <Contact name="Nihil" />
                    </div>
                    <About />
                    <Skills skills={skills}  /> */
                    /* <Home login = {login}/>
                  </div>
                  <Counter/> */}
    </div>
    </>
  )
}

export default App