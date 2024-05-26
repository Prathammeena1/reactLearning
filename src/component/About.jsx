import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div>About</div>
      <Link className='mx-10' to={`/about/1`}>01</Link>
      <Link className='mx-10' to={`/about/2`}>02</Link>
      <Link className='mx-10' to={`/about/3`}>03</Link>
      <hr />
      <Outlet />
    </div>

  )
}

export default About