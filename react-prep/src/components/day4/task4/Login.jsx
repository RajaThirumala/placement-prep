import React from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const setjwt = ()=>{
      localStorage.setItem("token","mytoken123456789");
      localStorage.setItem("role","user");
      navigate("/user");
  }
  return (
    <>
      <input type = "text" placeholder='username'></input>
      <input type = "password" placeholder='password'></input>
      <button className='bg-blue-300' onClick={()=>setjwt()}>Login</button>
    </>
  )
}

export default Login