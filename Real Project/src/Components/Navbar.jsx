import React from 'react'
import { NavLink } from 'react-router-dom'
import Users from './Users'
import Products from './Products'
import Home from "./Home";

const Navbar = () => {
  return (
    <nav className='mx-auto h-[10vh] flex items-center justify-center gap-20 w-[80%]'>
        <NavLink to={"/"} element={<Home/>} className='font-semibold text-xl'>Home</NavLink>
        <NavLink to={"/users"} element={<Users/>} className='font-semibold text-xl'>Users</NavLink>
        <NavLink to={"/products"} element={<Products/>} className='font-semibold text-xl'>Products</NavLink>
    </nav>
  )
}

export default Navbar