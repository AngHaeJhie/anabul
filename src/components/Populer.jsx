import React, { useState } from 'react';

const Populer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container-2">

            <h1 class="text-center text-3xl font-bold mb-8 text-[#0C3D55] font-Poppins">
                Hewan Peliharaan Populer
            </h1>

            <div className="w-full relative bg-slategray h-[510px] text-left text-xl text-white font-Poppins">
                <div className="absolute top-[40px] left-[67px] w-[310.1px] h-[430px] " >
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[430px] object-cover" alt="" src="img/anggora1.webp" />
                    <p className="absolute top-[375px] left-[30px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Anggora</p>
                </div>
                <div className="absolute top-[40px] left-[397px] w-[310.1px] h-[222px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[222px] object-cover" alt="" src="img/pomerania.webp" />
                    <p className="absolute top-[168px] left-[30px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Pomerania</p>
                </div>
                <div className="absolute top-[274px] left-[397.59px] w-[310.1px] h-[196px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[196px] object-cover" alt="" src="img/scothis.webp" />
                    <p className="absolute top-[143px] left-[30px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Scottish Fold</p>
                </div>
                <div className="absolute top-[40px] left-[727px]  w-[310.1px] h-[430px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[430px] object-cover" alt="" src="img/bichon.webp" />
                    <p className="absolute top-[375px] left-[29px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Bichon Frise</p>
                </div>
                <div className="absolute top-[40px] left-[1063px]  w-[310.1px] h-[196px] " >
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[196px] object-cover" alt="" src="img/poodle.webp" />
                    <p className="absolute top-[142px] left-[30px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Poodle</p>
                </div>
                <div className="absolute top-[248px] left-[1063px] w-[310.1px] h-[222px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[222px] object-cover" alt="" src="img/persia.webp" />
                    <p className="absolute top-[168px] left-[30px] leading-[26px] bg-[#0C3D55] rounded-full px-6 font-Poppins">Persia</p>
                </div>
            </div>
        </div>
    );
};

export default Populer;