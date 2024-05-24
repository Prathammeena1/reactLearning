import React from 'react'
import { useContext } from 'react'
import { datacontext } from './component/DataContext'
import Nav from './component/Nav.jsx'
import MainRoutes from './component/MainRoutes.jsx'

const App = () => {
  const [data, setdata] = useContext(datacontext)
  console.log(data)
  return (
    <div className='px-10'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App