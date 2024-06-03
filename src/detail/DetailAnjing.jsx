import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaTransgender } from "react-icons/fa";
const DetailAnjing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const style = { color: "#286280", fontSize: "36px", marginRight: "13px" };
  const less = { marginRight: "10px", marginLeft: "10px" };
  return (
    <div className=" px-[150px] flex py-3">
      <div className="w-1/2 mr-[80px]">
        <h1 className="text-[#286280] text-[40px] font-Poppins font-bold text-center mb-7">
          Bonnie
        </h1>
        <img
          src="img/poodle.webp"
          alt=""
          className="w-[498px] h-[495px] rounded-[40px] object-cover "
          style={{
            boxShadow:
              " 4px 4px 4px 0px rgba(12, 61, 85, 0.50), 4px 4px 4px 0px rgba(12, 61, 85, 0.50) inset",
          }}
        />
      </div>
      <div className="w-1/2 ">
        <h1 className="text-[#0C3D55] text-[24px] font-Poppins py-7 font-semibold">
          Ras: Anjing Pooddle
        </h1>
        <p className="text-[#0C3D55] text-[20px] font-Poppins font-normal w-[444px] mb-12">
          Memiliki sifat yang ceria, setia, aktif, selalu waspada dan insting
          tajam, mudah beradaptasi
        </p>
        <div>
          <div class="specific-detail">
            <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
              <SlCalender style={style} /> Usia : <FaLessThan style={less} /> 1
              Bulan
            </div>
            <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold my-[40px]">
              <FaTransgender style={style} /> Jenis Kelamin : Jantan
            </div>
            <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
              <FaMapMarkerAlt style={style} /> Lokasi : Jakarta
            </div>
          </div>

          <a
            href="/chat"
            className="no-underline cursor-pointer py-3 mt-12 pr-5 pl-[22px] text-[25px] w-[297.9px] durat shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] text-[#0C3D55] bg-[#fff]
         rounded-[20px] box-border flex flex-row  justify-center z-[1] border-[1px] border-solid border-[#286280]
          hover:bg-[#0C3D55] mx-auto font-Poppins px-2 text-3xl font-semibold font-heading-8-semibold  text-left inline-block  hover:text-[#fff] min-w-[65px] mq450:text-[19px]"
          >
            Adopsi Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailAnjing;