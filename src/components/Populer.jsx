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
                    <img className="absolute top-[379px] left-[12px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[380px] left-[40px] leading-[26px] font-Poppins">Anggora</div>
                </div>
                <div className="absolute top-[40px] left-[397px] w-[310.1px] h-[222px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[222px] object-cover" alt="" src="img/pomerania.webp" />
                    <img className="absolute top-[176px] left-[14px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[176px] left-[32px] leading-[26px] font-Poppins">Pomerania</div>
                </div>
                <div className="absolute top-[274px] left-[397.59px] w-[310.1px] h-[196px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[196px] object-cover" alt="" src="img/scothis.webp" />
                    <img className="absolute top-[150px] left-[13.41px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[150px] left-[22.41px] leading-[26px] font-Poppins">Scottish Fold</div>
                </div>
                <div className="absolute top-[40px] left-[727px]  w-[310.1px] h-[430px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[430px] object-cover" alt="" src="img/bichon.webp" />
                    <img className="absolute top-[382.38px] left-[16.9px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[382px] left-[29px] leading-[26px] font-Poppins">Bichon Frise</div>
                </div>
                <div className="absolute top-[40px] left-[1063px]  w-[310.1px] h-[196px] " >
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[196px] object-cover" alt="" src="img/poodle.webp" />
                    <img className="absolute top-[140.66px] left-[13.85px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[141px] left-[51px] leading-[26px] font-Poppins">Poodle</div>
                </div>
                <div className="absolute top-[248px] left-[1063px] w-[310.1px] h-[222px]">
                    <img className="absolute top-[0px] left-[0px] rounded-4xl w-[310.1px] h-[222px] object-cover" alt="" src="img/persia.webp" />
                    <img className="absolute top-[171px] left-[10px] rounded-4xl w-[145px] h-[35px]" alt="" src="img/Rectangle 11.png" />
                    <div className="absolute top-[172px] left-[52px] leading-[26px] font-Poppins">Persia</div>
                </div>
            </div>
        </div>
    );
};

export default Populer;