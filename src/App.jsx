import React from 'react'
import { useContext } from 'react'
import { datacontext } from './component/DataContext'

const App = () => {
  const [data,setdata] = useContext(datacontext)
  console.log(data)
  return (
    <div className='text-black'>App</div>
  )
}

export default App