// import React from 'react'
// import { Component } from 'react'
// class Skills extends Component {
//   render(){
//     return (<>
//       <div>   ///Skills///   </div>
//       <ol>
        
//       </ol>
//       </>
//     )
//   }
// }

// export default Skills
import React from 'react'

const skills = ({skills}) => {
  return (
    <>    
    <div>   ///Skills///   </div>
      <ol>
      {skills.map((skill) => (<li>{skill}</li>))}
     </ol>
       </>
  )
}

export default skills