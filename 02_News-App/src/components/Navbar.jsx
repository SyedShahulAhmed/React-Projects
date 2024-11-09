import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className='text-blue-700'>News<span className='text-red-500'>App</span></a>
        </div>

        <div className="hidden md:flex space-x-6 ">
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("technology")}>Technology</div>
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("business")}>Business</div>
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("science")}>Science</div>
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("sports")}>Sports</div>
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("health")}>Health</div>
          <div className="hover:text-red-500 cursor-pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </div>

        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2 `}>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("technology")}>Technology</div>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("business")}>Business</div>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("science")}>Science</div>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("sports")}>Sports</div>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("health")}>Health</div>
        <div className="block px-4 py-2 text-center hover:bg-red-700 cursor-pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
      </div>
    </nav>
  );
};

export default Navbar;
