import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} =use(AuthContext);
  const handleLogOut = () =>{
    console.log("user trying to logout")
    logOut().then(() => {
  alert("You logges out succesfully")
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md p-0 px-3 md:px-8 lg:px-10 sticky top-0 z-50 h-fit">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">My Profile</NavLink>
            </ul>
          </div>
          <Link to="/">
            <p className='font-bold text-2xl text-blue-600 italic'>
              Movie<span className='font-bold text-2xl text-amber-500 italic'>Flix</span>
            </p>
          </Link>
        </div>
<div>{user && user.email}</div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">My Profile</NavLink>
          </ul>
        </div>

        <div className="navbar-end">
          {
            user ? (<Link to="/" onClick={handleLogOut} className='btn btn-primary btn-outline'>LogOut</Link>) : ( <Link to="/auth/login" className="btn btn-primary btn-outline">Login</Link>)
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
