import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-800 hover:text-[#E43D12] transition-colors duration-300"
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#EBE9E1] z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#E43D12]">
          K.S
        </Link>
        <div className="space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;