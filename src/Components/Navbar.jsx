import React from 'react';
import logo from '../assets/react.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-betwwen">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <img src={logo} className="w-auto h-10 rounded-xl" />

            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              React Jobs
            </span>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                >
                  Jobs
                </NavLink>
                <NavLink to="/Add-Job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
