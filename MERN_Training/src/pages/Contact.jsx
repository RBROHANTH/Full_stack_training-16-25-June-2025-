import React, { useContext } from 'react'
import About from './About'

const Contact = ({name,phon}) => {
  return (<>
    <div>Contact {name}</div>
    <div>Contact {phon}</div>
    <About name={name} phon={phon}/>
    </>
  )
}

export default Contact
