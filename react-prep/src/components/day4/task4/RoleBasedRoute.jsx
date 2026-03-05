import React from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../../../pages/Home'
import Login from '../../../pages/Login'
import ErrorPage from '../../../pages/ErrorPage'
import { RouterProvider } from 'react-router-dom'
import Dashboard from '../../../pages/Dashboard'
import Admin from '../../../pages/Admin'
import User from '../../../pages/User'
const ProtectedDashboard = () => {
  const checkAdminAuthentication = (role)=>{
    if(!localStorage.getItem("token")){
        throw redirect("/")
    }
    if(localStorage.getItem("role")==="user"){
        throw redirect("/user")
    }
    return null
  }
  const checkUserAuthentication = (role)=>{
     if(!localStorage.getItem("token")){
        throw redirect("/")
    }
    if(localStorage.getItem("role")==="admin"){
        throw redirect("/admin")
    }
    return null
  }  
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/admin",
        element:<Admin></Admin>,
        loader: ()=>checkAdminAuthentication("admin")
        
    },{
        path:"/user",
        element:<User></User>,
        loader: ()=>checkUserAuthentication("user")
        
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