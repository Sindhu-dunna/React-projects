import React from 'react'
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const navigate=useNavigate();
    const changeHandler=()=>{
        navigate('/')
    }
  return (
    <>
      <div>Login successfully</div>
      <button onClick={changeHandler}>back to Home</button>
    </>
  )
}

export default Success;
