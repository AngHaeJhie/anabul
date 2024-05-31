import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#518CAB] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="img/logo.webp" alt="ini logo ya ges yak" width={50} height={41} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" isActive={() => activeLink === '/'}>Home</NavLink>
                <NavLink to="/category" isActive={() => activeLink === '/category'}>Category</NavLink>
                <NavLink to="/populer" isActive={() => activeLink === '/populer'}>Populer</NavLink>
                <NavLink to="/toptier" isActive={() => activeLink === '/toptier'}>TopTier</NavLink>
                <NavLink to="/contact" isActive={() => activeLink === '/contact'}>Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleDropdown}
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
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to="/" isActive={() => activeLink === '/'}>Beranda</NavLink>
                <NavLink to="/category" isActive={() => activeLink === '/category'}>Category</NavLink>
                <NavLink to="/populer" isActive={() => activeLink === '/populer'}>Populer</NavLink>
                <NavLink to="/toptier" isActive={() => activeLink === '/toptier'}>TopTier</NavLink>
                <NavLink to="/contact" isActive={() => activeLink === '/contact'}>Contact</NavLink>
              </div>
            </div>
          )}
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-0">
            <div className="ml-3 relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
              >
                <span className="sr-only">Profile</span>
                <FiUser className="h-8 w-8 rounded-full" />
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1 text-gray" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-[#0C3D55] hover:bg-[#0C3D55] hover:text-white no-underline" role="menuitem">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-[#0C3D55] hover:bg-[#0C3D55] hover:text-white no-underline" role="menuitem">Log out</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`${
      isActive() ? 'text-[#0C3D55] font-bold' : 'text-white'
    } block px-3 py-2 rounded-md text-base  no-underline`}
  >
    {children}
  </Link>
);

export default Navbar;