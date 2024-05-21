import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleUser = () => setIsUserOpen(!isUserOpen);
  const style = { color: "white", fontSize: "25px" }

  return (
    <nav className="bg-steelblue-200 w-[1340px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <img className="w-full relative max-w-full overflow-hidden left-11 h-[47px] object-cover" alt="" src="img/logo.png" />
            </div>
            <div className="hidden md:block ">
              <div className="ml-20 flex items-baseline space-x-4 ">
                <a href="#" className="text-white px-3 py-2 rounded-md text-base font-Poppins font-semibold no-underline ">Beranda</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-base font-Poppins font-semibold no-underline">Adopsi</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-base font-Poppins font-semibold no-underline">Kontak</a>
              </div>
            </div>
            <div className="absolute left-[1000px] flex flex-row items-center justify-center text-left text-base text-gray font-Poppins">
              <div className="rounded-[10px] flex flex-row items-center justify-center py-3 px-8 gap-[16px]">
                <img className="w-10 relative h-10 object-cover rounded-[50%]" alt="" src="img/user.png" />
                <div className="relative font-semibold text-white font-Poppins">Umi Khoirunnisa
                  <button type='button' className='bg-transparent w-100 relative  overflow-hidden shrink-0 inline-flex  h-full items-center justify-center rounded-md px-2 top-1 text-slategray hover:text-darkslategray-200 cursor-pointer' onClick={toggleUser}> <IoIosArrowDown style={style} /></button>
                </div>
                {isUserOpen && (
                  <div className="absolute top-[60px] left-[50px] w-44 bg-white border border-gray-300 rounded-md shadow-lg">
                    <a className="p-2 hover:bg-gray-200 font-Poppins text-darkslategray-200 cursor-pointer">Ras 1</a>
                    <a className="p-2 hover:bg-gray-200 font-Poppins cursor-pointer">Ras 2</a>
                    <a className="p-2 hover:bg-gray-200 font-Poppins cursor-pointer">Ras 3</a>
                  </div>
                )}
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
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Adopsi</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
