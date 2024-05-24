import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {


  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/about')

  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" className='border border-zinc-500' />
      <button className=''>sumbit</button>
    </form>
  )
}

export default Home