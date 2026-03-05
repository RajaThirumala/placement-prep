import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../../../pages/Home'
import Dashboard from '../../../pages/Dashboard'
import About from '../../../pages/About'
import ErrorPage from '../../../pages/ErrorPage'
const RoutingSetup = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>

        </Routes>
   </BrowserRouter>
  )
}

export default RoutingSetup