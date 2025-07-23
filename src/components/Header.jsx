import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'; // Ensure this CSS file is linked
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logoutUser } = use(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Successfully logged out!');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error('Logout failed. Please try again.');
      });
  };

  const navLinks = (
    <>
      {/* Navigation links with hover effect to match the vibrant accent color */}
      <li><NavLink to="/" className="hover:text-[#FF5733] transition-colors duration-200">Home</NavLink></li>
      <li><NavLink to="/AvailableFoods" className="hover:text-[#FF5733] transition-colors duration-200">Available Foods</NavLink></li>
      <li><NavLink to="/AddFood" className="hover:text-[#FF5733] transition-colors duration-200">Add Food</NavLink></li>
      <li><NavLink to="/MyFoods" className="hover:text-[#FF5733] transition-colors duration-200">Manage My Foods</NavLink></li>
      <li><NavLink to="/FoodRequest" className="hover:text-[#FF5733] transition-colors duration-200">My Food Request</NavLink></li>
    </>
  );

  return (
    // Navbar background changed to a very light gray/off-white for a clean look
    <div className="navbar bg-white text-gray-800 shadow-md px-4 py-3 border-b border-gray-100">

      {/* Navbar Start Section: Logo and Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden focus:outline-none">
            {/* Hamburger icon for mobile menu - color changed to match text */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Mobile dropdown menu content - background is white as per CSS */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-xl text-gray-700"
          >
            {navLinks}
          </ul>
        </div>
        {/* Website Logo/Title - styled with the vibrant accent color */}
        <Link to="/" className="btn btn-ghost text-2xl font-extrabold tracking-wide text-[#FF5733] hover:text-[#e04c2c] transition-colors duration-200">
          BDFoodSharing
        </Link>
      </div>

      {/* Navbar Center Section: Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-medium"> {/* Increased spacing and medium font weight */}
          {navLinks}
        </ul>
      </div>

      {/* Navbar End Section: User Actions (Login/Logout, Profile) */}
      <div className="navbar-end flex items-center space-x-4"> {/* Increased spacing */}
        {user ? (
          <>
            {user.displayName && (
                <span className="hidden md:block text-sm font-semibold text-gray-700 mr-2">Hello, {user.displayName.split(' ')[0]}</span>
            )}
            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end">
              {/* Profile avatar border changed to accent color on hover */}
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-transparent hover:border-[#FF5733] transition-all duration-200 focus:outline-none">
                <div className="w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"> {/* Lighter background for avatar placeholder */}
                  <img
                    alt="User Profile"
                    src={user.photoURL || 'https://i.ibb.co/L82s82X/user.png'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Dropdown menu for profile options and logout */}
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-40 p-2 shadow-xl text-gray-700">
                <li><Link to="/profile" className="hover:text-[#FF5733]">Profile</Link></li>
                <li><button onClick={handleLogout} className="hover:text-[#FF5733]">Logout</button></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* Login button - outline style with accent color border/text */}
            <Link to="/auth/login" className="btn btn-outline text-[#FF5733] border-2 border-[#FF5733] hover:bg-[#FF5733] hover:text-white hover:border-[#FF5733] transition-all duration-300 px-6 py-2 rounded-lg text-base font-semibold">
              Login
            </Link>
            {/* Register button - solid fill with accent color */}
            <Link to="/auth/signup" className="hidden sm:inline-flex btn bg-[#FF5733] text-white border-none hover:bg-[#e04c2c] transition-all duration-300 px-6 py-2 rounded-lg text-base font-semibold">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;