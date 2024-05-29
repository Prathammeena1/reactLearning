import axios from '../helpers/axios'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  const [users, setusers] = useState(null)
  const getUsers = async () => {
    try{
     const {data} = await axios.get('/users')
     setusers(data)
     console.log(data)
    }
    catch(err){
     console.log(err)
    }
   }
   
  return (
    <div>
      <button onClick={getUsers}>About</button>
      {users ? users.map(user => <Link key={user.id} className='mx-10 block'>{user.name}</Link>) : null}
      <hr />




      <Outlet />
    </div>

  )
}

export default About