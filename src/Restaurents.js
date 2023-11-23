import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Restaurents = () => {
  return (
    <>
    <div> Restaurents</div>
    <nav>
    <Link to='/Restaurents/exist'>Existing</Link>
    <Link to='/Restaurents/new'>New Restaurents</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Restaurents;
