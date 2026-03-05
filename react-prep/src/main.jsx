import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider, Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from "./pages/Login";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import RoutingSetup from './components/day4/task1/RoutingSetup.jsx'
import ProtectedDashboard from './components/day4/task2/ProtectedDashboard.jsx'
import NestedRoutes from './components/day4/task3/NestedRoutes.jsx'
import RoleBasedRoute from './components/day4/task4/RoleBasedRoute.jsx'
createRoot(document.getElementById('root')).render(
  <RoleBasedRoute></RoleBasedRoute>
)
