import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Bar from '../assets/Icons/Bar.png';
import close from '../assets/Icons/close.png';
import Login from './Login';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/services', link: 'Services' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ];

  // Open Login Modal
  const LoginOpen = () => setIsLogin(true);

  // Close Login Modal
  const LoginClose = () => setIsLogin(false);

  return (
    <div className="bg-transparent sticky top-0 right-0 left-0">
      <div className="max-w-[1240px] bg-[#BFCDE0] lg:mx-auto flex justify-between items-center mt-5 p-5 rounded-full mx-2 shadow-md mb-8">
        {/* Logo Section */}
        <div className="px-5">
          <Link to="/">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
              Astro<span className="text-[#ED254E]">Hub</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-evenly gap-8 text-lg uppercase font-bold">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="transition-all duration-300 hover:scale-105">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-600 transition-colors duration-300'
                    : 'hover:text-gray-700 transition-colors duration-300'
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <button
            onClick={LoginOpen}
            className="bg-[#A3BCF9] px-5 py-2 text-white rounded-full flex gap-2 transition-all justify-center items-center duration-300 hover:scale-105"
          >
            <span className="text-black font-bold">Login</span>
          </button>
        </div>
        <Login isOpen={isLogin} onClose={LoginClose} />

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-5 py-2 text-white rounded-full transition-all duration-300 hover:scale-105"
          >
            <img src={Bar} alt="Menu Icon" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-[50%] h-screen bg-[#D1D2F9] flex flex-col px-10 pt-14 transform transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-full scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-bold uppercase">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="transition-all duration-300 hover:scale-100 scale-95">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 transition-colors duration-300'
                    : 'hover:text-gray-700 transition-colors duration-300'
                }
                onClick={() => setMobileMenuOpen(false)} // Close menu on selection
              >
                {link}
              </NavLink>
            </li>
          ))}
          <button
            onClick={LoginOpen}
            className="bg-[#A3BCF9] px-5 py-2 text-white rounded-full flex gap-2 transition-all justify-center items-center duration-300 hover:scale-105"
          >
            <span className="text-black font-bold">Login</span>
          </button>
        </ul>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-0 right-0 px-5 py-2 text-white rounded-full mt-5  transition-all duration-300"
        >
          <img src={close} alt="Close Menu" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
