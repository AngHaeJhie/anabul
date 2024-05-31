import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="bg-[#518CAB] text-white font-Poppins absolute w-full">
            <div className="container mx-auto py-4 pr-1 pl-2">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="pr-3 pl-10">
                        <div className="flex items-center gap-2">
                            <img src="img/logo.webp" alt="Logo" className="w-12 h-12" />
                            <div>
                                <p className="font-bold uppercase text-[#0C3D55]">ANABUL</p>
                                <p className="text-sm">Buka Hati, Buka Rumah</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>Medan, Indonesia</p>
                            <p>(021) 8889 888</p>
                            <p>anabul3003@gmail.com</p>
                        </div>
                    </div>
                    <div className="pr-3 pl-5">
                        <div className="font-bold text-[#0C3D55]">Layanan</div>
                        <ul className='list-none pr-3 pl-1'>
                            <li>Adopsi</li>
                            <li>Kontak</li>
                        </ul>
                    </div>
                    <div className="pr-3 pl-5">
                        <div className="font-bold text-[#0C3D55]">Features</div>
                            <ul className='list-none pr-3 pl-1'>
                                <li>Kategori Anabul</li>
                                <li>Detail Anabul</li>
                                <li>Bantuan</li>
                            </ul>                   
                    </div>
                    <div className="w-1/4 pr-5">
                        <div className="font-bold text-[#0C3D55]">Hubungi Kami</div>
                        <ul className='pr-3 pl-1' >
                            <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full"><FaWhatsapp color='#0C3D55' /></div>
                                <span>+62 857 9898 0011</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full"><FaInstagram color='#0C3D55' /> </div>
                                <span>@anabul </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full"><BiLogoTiktok color='#0C3D55' /></div>
                                <span>@anabul</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mb-0 pl-5 relative top-[19px]'>
                <div className="absolute rounded-3xs w-20 h-20 bg-white bottom-0 mb-2 mx-6"/>
                <img 
                src='img/Animal Shelter.webp' 
                alt='shelter' 
                className="w-32 h-32 absolute bottom-0 mb-0" />
            </div>

            <div className="text-sm py-3 bg-[#0C3D55] ">
                <div className="container mx-auto">
                    <p className="text-center text-white">&copy;2024 ANABUL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;