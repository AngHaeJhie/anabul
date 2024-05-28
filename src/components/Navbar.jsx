
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">ini logo</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/category" className="text-white px-3 py-2 rounded-md text-sm font-medium">Category</Link>
                <Link to="/populer" className="text-white px-3 py-2 rounded-md text-sm font-medium">Populer</Link>
                <Link to="/toptier" className="text-white px-3 py-2 rounded-md text-sm font-medium">TopTier</Link>
                <Link to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/category" className="text-white block px-3 py-2 rounded-md text-base font-medium">Category</Link>
            <Link to="/populer" className="text-white block px-3 py-2 rounded-md text-base font-medium">Populer</Link>
            <Link to="/toptier" className="text-white block px-3 py-2 rounded-md text-base font-medium">TopTier</Link>
            <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;