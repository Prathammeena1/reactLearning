import React from 'react'
import { useContext } from 'react'
import { datacontext } from './component/DataContext'
import Nav from './component/Nav.jsx'
import MainRoutes from './component/MainRoutes.jsx'

const App = () => {
  return (
    <div className='px-10 bg-zinc-900 text-zinc-200 h-screen w-full'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App