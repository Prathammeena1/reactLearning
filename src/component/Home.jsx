import axios from '../helpers/axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {


  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/about')
  }

  const getUsers = async () => {
   try{
    const {data} = await axios.get('/users')
    console.log(data)
   }
   catch(err){
    console.log(err)
   }
  }


  return (
      <button onClick={getUsers}>sumbit</button>
   
  )
}

export default Home