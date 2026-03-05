import React from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../../../pages/Home'
import Login from '../../../pages/Login'
import ErrorPage from '../../../pages/ErrorPage'
import { RouterProvider } from 'react-router-dom'
import Dashboard from '../../../pages/Dashboard'
const ProtectedDashboard = () => {
  const checkAuthentication = ()=>{
    if(!localStorage.getItem("token")){
        throw redirect("/")
    }
    return null
  }  
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        loader: ()=>checkAuthentication(),
        
    },
    {
        path:"*",
        element:<ErrorPage/>
    }
  ])   
  return (
    <RouterProvider router = {router}></RouterProvider>
  )
}

export default ProtectedDashboard