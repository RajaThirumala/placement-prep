import React from 'react'
import { createBrowserRouter } from 'react-router'
import Dashboard from '../../../pages/Dashboard'
import { RouterProvider } from 'react-router-dom'
import Navbar from '../../../pages/Navbar'
import Overview from '../../../pages/Overview'
import Settings from '../../../pages/Settings'
import Home from '../../../pages/Home'

const NestedRoutes = () => {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
      path:"/dashboard",
      element:<Navbar/>,
      children:[{
        index: true,
        element:<Dashboard></Dashboard>
      },{
        path:"overview",
        element:<Overview></Overview>
      },
      {
        path:"settings",
        element:<Settings></Settings>
      }
    ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default NestedRoutes