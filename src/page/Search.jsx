import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaTransgender } from "react-icons/fa";


const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = { color: "#286280", fontSize: "36px", marginRight: "13px" };
  const less = { marginRight: "10px", marginLeft: "10px" };

  const navigate = useNavigate();

  return (
    <div className="max-w-[1000px] mx-auto p-[20px]">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(1000px))] gap-[40px]">
        
        <div className="cat-cards rounded-[40px] bg-[#89bbd5] h-[490px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] duration-[0.5s] hover:translate-x-[10px] ">
          <div className=" cat-card flex py-[40px] px-[55px]">
            <div className="bagian-foto w-1/2 mr-[50px] ">
              <img
                src="img/anggora1.webp"
                alt=""
                className="cat-image w-[423px] h-[423px] rounded-[40px] object-cover box-shadow: 3px 3px 3px black;"
              />
            </div>
            <div className="bagian-info w-1/2 text-[ #0c3d55]">
              <div className="info">
                <div className="detail">
                  <h3 className="name text-[32px] font-bold text-[#0C3D55]  shadow-[2px 4px 4px rgba(40, 98, 128, 0.50)] ">
                    Jasper
                  </h3>
                  <p className="text-[20px] font-semibold text-[#0C3D55] my-[30px]">
                    Ras: Kucing Anggora
                  </p>
                  <div class="specific-detail">
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <SlCalender style={style} /> Usia :{" "}
                      <FaLessThan style={less} /> 1 Bulan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold my-[40px]">
                      <FaTransgender style={style} /> Jenis Kelamin : Jantan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <FaMapMarkerAlt style={style} /> Lokasi : Jakarta
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/detailkucing"
                className="mx-auto no-underline cursor-pointer py-3 pr-5 pl-[32px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] bg-[#fff]
                  rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280] hover:bg-[#0C3D55]  mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold 
                  font-heading-8-semibold text-[#0C3D55] text-[24px] text-left inline-block min-w-[65px] border-none hover:text-[#ffff] duration-300 z-[1] mq450:text-[19px]"
              >
                Detail Hewan
              </a>
            </div>
          </div>
        </div>
        <div className="cat-cards rounded-[40px] bg-[#89bbd5] h-[490px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  duration-[0.5s] hover:translate-x-[10px] ">
          <div className=" cat-card flex py-[40px] px-[55px]">
            <div className="bagian-foto w-1/2 mr-[50px] ">
              <img
                src="img/anggora4.webp"
                alt=""
                className="cat-image w-[423px] h-[423px] rounded-[40px] object-cover box-shadow: 3px 3px 3px black;
"
              />
            </div>
            <div className="bagian-info w-1/2 text-[ #0c3d55]">
              <div className="info">
                <div className="detail">
                  <h3 className="name text-[32px] font-bold text-[#0C3D55]  shadow-[2px 4px 4px rgba(40, 98, 128, 0.50)] ">
                    Tobby
                  </h3>
                  <p className="text-[20px] font-semibold text-[#0C3D55] my-[30px]">
                    Ras: Kucing Anggora
                  </p>
                  <div class="specific-detail">
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <SlCalender style={style} /> Usia :{" "}
                      <FaLessThan style={less} /> 1 Bulan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold my-[40px]">
                      <FaTransgender style={style} /> Jenis Kelamin : Jantan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <FaMapMarkerAlt style={style} /> Lokasi : Padang
                    </div>
                  </div>
                </div>
              </div>

              <a
                href=""
                className="no-underline mx-auto cursor-pointer py-3 pr-5 pl-[32px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] bg-[#fff]
         rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280] hover:bg-[#0C3D55]  mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold 
         font-heading-8-semibold text-[#0C3D55] text-[24px] text-left inline-block min-w-[65px] border-none hover:text-[#ffff] duration-300 z-[1] mq450:text-[19px]"
              >
                Detail Hewan
              </a>
            </div>
          </div>
        </div>
        <div className="cat-cards rounded-[40px] bg-[#89bbd5] h-[490px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  duration-[0.5s] hover:translate-x-[10px] ">
          <div className=" cat-card flex py-[40px] px-[55px]">
            <div className="bagian-foto w-1/2 mr-[50px] ">
              <img
                src="img/anggora2.webp"
                alt=""
                className="cat-image w-[423px] h-[423px] rounded-[40px] object-cover box-shadow: 3px 3px 3px black;
"
              />
            </div>
            <div className="bagian-info w-1/2 text-[ #0c3d55]">
              <div className="info">
                <div className="detail">
                  <h3 className="name text-[32px] font-bold text-[#0C3D55]  text-shadow:0_1px_2px_rgb(0_0_0/_40%)">
                    Nicko
                  </h3>
                  <p className="text-[20px] font-semibold text-[#0C3D55] my-[30px]">
                    Ras: Kucing Anggora
                  </p>
                  <div class="specific-detail">
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <SlCalender style={style} /> Usia :{" "}
                      <FaLessThan style={less} /> 1 Bulan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold my-[40px]">
                      <FaTransgender style={style} /> Jenis Kelamin : Jantan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <FaMapMarkerAlt style={style} /> Lokasi : YogYakarta
                    </div>
                  </div>
                </div>
              </div>

              <a
                href=""
                className="mx-auto no-underline cursor-pointer py-3 pr-5 pl-[32px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] bg-[#fff]
         rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280] hover:bg-[#0C3D55]  mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold 
         font-heading-8-semibold text-[#0C3D55] text-[24px] text-left inline-block min-w-[65px] border-none hover:text-[#ffff] duration-300 z-[1] mq450:text-[19px]"
              >
                Detail Hewan
              </a>
            </div>
          </div>
        </div>
        <div className="cat-cards rounded-[40px] bg-[#89bbd5] h-[490px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  duration-[0.5s] hover:translate-x-[10px] ">
          <div className=" cat-card flex py-[40px] px-[55px]">
            <div className="bagian-foto w-1/2 mr-[50px] ">
              <img
                src="img/anggora3.webp"
                alt=""
                className="cat-image w-[423px] h-[423px] rounded-[40px] object-cover box-shadow: 3px 3px 3px black;
"
              />
            </div>
            <div className="bagian-info w-1/2 text-[ #0c3d55]">
              <div className="info">
                <div className="detail">
                  <h3 className="name text-[32px] font-bold text-[#0C3D55]  shadow-[2px 4px 4px rgba(40, 98, 128, 0.50)] ">
                    Bimbim
                  </h3>
                  <p className="text-[20px] font-semibold text-[#0C3D55] my-[30px]">
                    Ras: Kucing Anggora
                  </p>
                  <div class="specific-detail">
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <SlCalender style={style} /> Usia :{" "}
                      <FaLessThan style={less} /> 1 Bulan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold my-[40px]">
                      <FaTransgender style={style} /> Jenis Kelamin : Jantan
                    </div>
                    <div className="m-[25px] flex items-center text-[#0C3D55] text-[20px] font-Poppins font-semibold ">
                      <FaMapMarkerAlt style={style} /> Lokasi : Bandung
                    </div>
                  </div>
                </div>
              </div>

              <a
                href=""
                className="no-underline mx-auto cursor-pointer py-3 pr-5 pl-[32px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] bg-[#fff]
         rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280] hover:bg-[#0C3D55]  mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold 
         font-heading-8-semibold text-[#0C3D55] text-[24px] text-left inline-block min-w-[65px] border-none hover:text-[#ffff] duration-300 z-[1] mq450:text-[19px]"
              >
                Detail Hewan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;