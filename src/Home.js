import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  const changeHandler=()=>{
    navigate('/Success')
  }
  return (
    <>
      <div> Home</div> 
      <button onClick={changeHandler}>Login</button>
    </>
  )
}

export default Home;

