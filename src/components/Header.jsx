import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {
  const {user,logoutUser} = use(AuthContext)
  const  handleLogout = ()=>{
     logoutUser().then(()=>{
      alert('success')
     }).catch(()=>{
      alert('unsuccess')
     })
  }
  const links = <>
    <NavLink to="/" className="mr-4 uppercase text-white">  Home</NavLink>
    <NavLink to="/AvailableFoods" className="mr-4 uppercase text-white">Available Foods</NavLink>
    <NavLink to="/AddFood" className="mr-4 uppercase text-white">Add Food</NavLink>
    <NavLink to="/MyFoods" className="mr-4 uppercase text-white">Manage My Foods</NavLink>
    <NavLink to="/FoodRequest" className="mr-4 uppercase text-white">My Food Request</NavLink>

  </>
  return (
    <div className="navbar  shadow-sm bg-gray-800">
      <h2>{user ? user.email : " "}</h2>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link to="/auth/login" className="btn">Login</Link>
        }
        {
          user ? " " : <Link to="/auth/signup" className="btn">Register</Link>
        }
        
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={`${user && user.photoURL}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;