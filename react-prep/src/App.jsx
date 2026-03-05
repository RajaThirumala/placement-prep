import { useEffect, useState } from "react";
import { Routes, Route, createBrowserRouter } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/day1/task1/ProductCard";
import UserCard from "./components/day1/task3/UserCard";
import Products from "./components/day1/task1/Products";
import Toggle from "./components/day1/task2/Toggle";
//import Dashboard from "./components/day1/task3/Dashboard";
import SmartCounter from "./components/day2/Task1/SmartCounter";
import LiveSearchFilter from "./components/day2/Task3/LiveSearchFilter";
import DataFetch from "./components/day2/Task2/DataFetch";
import ProductList from "./components/day3/task1/ProductList";
import CartCount from "./components/day3/task1/CartCount";
import Recal from "./components/day3/task2/Recal";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import { RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: "Home"
    }
  ])
  
 
  return (
   <>
   <RouterProvider router = {router}></RouterProvider>
   </>
  );
}

export default App;
