import React, { useState } from 'react';

const Populer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="container-2">
        {/* populer */}
        <h1 class="text-center text-3xl font-bold mb-8 text-[#0C3D55] font-Poppins">
          Hewan Peliharaan Populer
        </h1>
        <div className="w-full bg-[#0C3D55] h-[510px]">
          <div className="p-[20px] pl-[30px] pb-[35px] flex ">
            <div className="relative">
              <img
                className="rounded-3xl w-[310.096px] h-[430.096px] relative object-cover"
                src="img/anggora1.webp"
                alt=""
              />
              <p className="bottom-[45px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                Anggora
              </p>
            </div>

            <div className="mx-[20px]">
              <div className="relative">
                <img
                  className=" rounded-3xl relative w-[310.096px] h-[222px]"
                  src="img/pomerania.webp"
                  alt=""
                />
                <p className="bottom-[1px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                  Pomerania
                </p>
              </div>
              <div className="mt-6 relative">
                <img
                  className="rounded-3xl w-[310.096px] h-[222px]"
                  src="img/scothis.webp"
                  alt=""
                />
                <p className="bottom-[0px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                  Scothis Fold
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-[310.096px] relative mr-[25px] h-[430.096px]"
                src="img/bichon.webp"
                alt=""
              />
              <p className="bottom-[45px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                Bichon Frise
              </p>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  className="rounded-3xl relative w-[310.096px] h-[222px]"
                  src="img/poodle.webp"
                  alt=""
                />
                <p className="bottom-[1px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                  poodle
                </p>
              </div>
              <div className="mt-6 relative">
                <img
                  className="rounded-3xl relative w-[310.096px] h-[222px]"
                  src="img/persia.webp"
                  alt=""
                />
                <p className="bottom-[0px] left-6 absolute bg-[#0C3D55] text-[#fff] rounded-full px-6 font-Poppins">
                  persia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Populer;