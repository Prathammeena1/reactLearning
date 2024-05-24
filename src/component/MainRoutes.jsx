import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import PageNotFound from './PageNotFound.jsx'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
  )
}

export default MainRoutes