import React, { useEffect,useState } from 'react'

const Ecpect_2 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => (res.json()))
        .then((data) => setUser(data));
    }, []); 
  
  return (
    <div>
    <h2>User List</h2>
    <ul>
      {user.map((data) => (<>
        <li key={data.id}>{data.name}</li><br></br>
        <li key={data.id}>{data.phone}</li>
        {/* <li key={data.id}>{data.address}</li> */}
        </>
      ))}
    </ul>
  </div>

  )
}

export default Ecpect_2