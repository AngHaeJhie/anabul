import { CiSearch } from "react-icons/ci";
import { IoEllipse } from "react-icons/io5";
import { FiSmile } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

import React, { useState } from "react";
const FiturChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "20",
    left: "25",
    marginLeft: "16px",
    marginTop: "10px",
    width: "16.361px",
    height: "16.361px",
    color: "#0C3D55",
  };
  const searchsatu = {
    paddingLeft: "10px",
    paddingTop: "10px",
    fontSize: "70px",
    color: "#EF88B9",
  };
  const searchdua = {
    paddingLeft: "10px",
    paddingTop: "10px",
    fontSize: "70px",
    color: "#8490F4",
  };

  const searchempat = {
    paddingLeft: "10px",
    paddingTop: "10px",
    fontSize: "70px",
    color: "#D6F22C",
  };
  const document = {
    fontSize: "30px",
    color: "#0C3D55",
  };
  const emoticon = {
    fontSize: "28px",
    color: "#0C3D55",
    marginLeft: "20px",
  };
  const kirim = {
    fontSize: "28px",
    color: "#fff",
    position: "absolute",
    top: "10px",
    left: "15px",
  };
  const linkk = {
    fontSize: "30px",
    color: "#0C3D55",
    marginLeft: "25px",
    marginRight: "15px",
  };

  return (
    <div className=" flex justify-between  ">
      {/* left sidebar */}
      <div className="left-sidebar w-[27%] sticky self-start bg-[#89BBD5]">
        <div className="py-3">
          <div className=" rounded-[20px] border-[2px] bg-[#FFF] mb-[20px] border-[#518CAA] w-[250px] h-[38.474px] mx-auto">
            <div className="relative">
              <CiSearch style={style} />
            </div>
            <input
              className=" bg-none mx-10 my-2 outline-none placeholder:font-Poppins placeholder:text-[12px] placeholder:text-[#0C3D55] "
              type="text"
              placeholder="Cari disini"
            />
          </div>
          <div className="w-[282.737px] h-[82.316px]  mb-[20px]  border-[2px] border-[#518CAA]  mx-auto rounded-[15px] bg-[#FFFFFF]  shadow-[0px 4px 4px 0px rgba(12, 61, 85, 0.25)]">
            <div className="flex relative">
              <IoEllipse style={searchsatu} />
              <h1 className="absolute top-4 left-10 text-[22px] font-black">
                J
              </h1>
              <div className="mt-4 ml-4 text-[#0C3D55] font-Poppins">
                <h1 className="text-[14px] font-semibold">Jerry</h1>
                <p className="text-[12px] font-normal -mt-2 ">Ofc...</p>
              </div>
              <p className="ml-24 mt-2 text-[10px] text-[#0C3D55] font-Poppins font-normal">
                5 Jam
              </p>
            </div>
          </div>
          <div className="w-[282.737px] h-[82.316px]  mb-[20px]  border-[2px] border-[#518CAA] rounded-[15px] bg-[#FFFFFF] mx-auto shadow-[0px 4px 4px 0px rgba(12, 61, 85, 0.25)]">
            <div className="flex relative">
              <IoEllipse style={searchdua} />
              <h1 className="absolute top-4 left-9 text-[22px] font-black">
                S
              </h1>
              <div className="mt-4 ml-4 text-[#0C3D55] font-Poppins">
                <h1 className="text-[14px] font-semibold">Stacy</h1>
                <p className="text-[12px] font-normal -mt-1">Sorryy</p>
              </div>
              <p className="ml-24 mt-2 text-[10px] text-[#0C3D55] font-Poppins font-normal">
                5 Jam
              </p>
            </div>
          </div>
          <div className=" mb-[20px]  w-[310.737px] h-[90.316px] border-[2px] border-[#518CAA] rounded-[15px] bg-[#FFFFFF]  mx-auto  shadow-[0px 4px 4px 0px rgba(12, 61, 85, 0.25)]">
            <div className="flex relative">
              <img
                src="img/user.png"
                alt=""
                className="rounded-full object-cover w-[45px] h-[45px] ml-[18px] mt-[13px]"
              />
              <div className="mt-4 ml-6 text-[#0C3D55] font-Poppins">
                <h1 className="text-[14px] font-Poppins font-semibold">
                  Umi Khoirunnisa
                </h1>
                <p className="text-[12px] font-normal font-Poppins -mt-2">
                  sure...
                </p>
              </div>
              <p className="ml-14 mt-2 text-[10px] text-[#0C3D55] font-Poppins font-normal">
                Now
              </p>
            </div>
          </div>
          <div className=" h-[82.316px] w-[282.737px] bg-[#FFFFFF] border-[2px] border-[#518CAA] rounded-[15px]  mx-auto  shadow-[0px 4px 4px 0px rgba(12, 61, 85, 0.25)]">
            <div className="flex relative">
              <IoEllipse style={searchempat} />
              <h1 className="absolute top-4 left-9 text-[22px] font-black">
                A
              </h1>
              <div className="mt-4 ml-4 text-[#0C3D55] font-Poppins">
                <h1 className="text-[14px] font-semibold">Ayu</h1>
                <p className="text-[12px] font-normal -mt-2">hi....</p>
              </div>
              <p className="ml-24 mt-2 text-[10px] text-[#0C3D55] font-Poppins font-normal">
                5 Jam
              </p>
            </div>
          </div>
        </div>
      </div>
      {/****************** main *****************/}
      <div className=" relative basis-[46%] bg-[#FFF] pr-[80px] pl-[30px]">
        <div className="m-10 flex ">
          <div className="flex items-center">
            <img
              className="w-[45px] h-[45px] rounded-full object-cover mr-3"
              src="img/user.png"
              alt=""
            />
            <h1
              className="font-semibold font-Poppins
           text-[18px] text-[#0C3D55]"
            >
              Umi Khoironisa{" "}
            </h1>
          </div>
          <div className="flex ml-5 items-center">
            <div className="w-[8px] h-[8px] bg-[#0FBE00] rounded-full "></div>
            <p
              className="ml-3 font-medium font-Poppins
           text-[14px] text-[#0C3D55]"
            >
              online
            </p>
          </div>
        </div>
        <div className="w-full border-solid border-y-[1px] border-[#518CAA] absolute left-0 top-[100px] "></div>
        <div className=" mt-20 mb-5 relative w-[210px] h-[51px]  border-solid border-[#286280] border-2 bg-[#fff] rounded-tr-[24px] rounded-l-[24px] rounded-r-[24px] rounded-bl-[1px] ">
          <input
            className="outline-none pt-[10px] pl-[10px] w-[130px] placeholder:text-[15px] placeholder:text-[#286280] bg-transparent placeholder:font-normal font-Poppins"
            type="text"
            placeholder="Message Here"
          />{" "}
          <span className="absolute right-4 bottom-0 text-[13px] font-light font-Poppins text-[#518CAA]">
            {" "}
            08:50
          </span>
        </div>
        <div className=" relative w-[210px] h-[51px]  border-solid border-[#286280] border-2 bg-[#fff] rounded-tr-[24px] rounded-l-[24px] rounded-r-[24px] rounded-bl-[1px] ">
          <input
            className="outline-none pt-[10px] pl-[10px] w-[130px] placeholder:text-[15px] placeholder:text-[#286280] bg-transparent placeholder:font-normal font-Poppins"
            type="text"
            placeholder="Message Here"
          />{" "}
          <span className="absolute right-4 bottom-0 text-[13px] font-light font-Poppins text-[#518CAA]">
            {" "}
            08:50
          </span>
        </div>
        <div className=" absolute right-[20px] mt-10 w-[210px] h-[51px]  border-solid border-[#286280] border-2 bg-[#fff] rounded-tr-[24px] rounded-l-[24px] rounded-l-[24px] rounded-br-[1px] ">
          <input
            className="outline-none pt-[10px] pl-[10px] w-[130px] placeholder:text-[15px] placeholder:text-[#286280] bg-transparent placeholder:font-normal font-Poppins"
            type="text"
            placeholder="Message Here"
          />{" "}
          <span className="absolute right-4 bottom-0 text-[13px] font-light font-Poppins text-[#518CAA]">
            {" "}
            08:51
          </span>
        </div>
        <div className=" mt-40 relative w-[210px] h-[51px]  border-solid border-[#286280] border-2 bg-[#fff] rounded-tr-[24px] rounded-l-[24px] rounded-r-[24px] rounded-bl-[1px] ">
          <input
            className="outline-none pt-[10px] pl-[10px] w-[130px] placeholder:text-[15px] placeholder:text-[#286280] bg-transparent placeholder:font-normal font-Poppins"
            type="text"
            placeholder="Message Here"
          />{" "}
          <span className="absolute right-4 bottom-0 text-[13px] font-light font-Poppins text-[#518CAA]">
            {" "}
            08:52
          </span>
        </div>
        <div className=" absolute right-[20px] mt-10 w-[114px] h-[47px]  border-solid border-[#286280] border-2 bg-[#fff] rounded-tr-[24px] rounded-l-[24px] rounded-l-[24px] rounded-br-[1px] ">
          <input
            className="outline-none pt-[10px] pl-[10px] w-[130px] placeholder:text-[15px] placeholder:text-[#286280] bg-transparent placeholder:font-normal font-Poppins"
            type="text"
            placeholder="Yess..."
          />{" "}
          <span className="absolute right-4 bottom-0 text-[13px] font-light font-Poppins text-[#518CAA]">
            {" "}
            08:53
          </span>
        </div>
        <div className="w-full border-solid border-y-[1px] border-[#518CAA] absolute left-0 bottom-[50px] "></div>

        <div className=" flex justify-between ">
          <div className="flex absolute left-0 bottom-[10px] ">
            <FiSmile style={emoticon} />
            <input
              placeholder="kirim pesan"
              type="text"
              className="font-normal placeholder:font-Poppins
           placeholder:text-[18px] placeholder:text-[#286280] ml-4 outline-none"
            />
          </div>
          <div className="flex absolute items-center left-[500px] bottom-[0] ">
            <FaLink style={linkk} className="bg-[##0C3D55]" />
            <div className="bg-[#0C3D55] w-[45px] h-[45px] rounded-full relative pr-5 ">
              <FiSend style={kirim} />
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar */}
      <div className="right-sidebar basis-[27%] sticky top-[70px] mx-auto bg-[#89BBD5] ">
        <img
          src="img/user.png"
          alt="user"
          className="w-[100px] h-[100px] rounded-full object-cover mt-[50px] ml-[120px]"
        />
        <div className="text-center mt-[30px]">
          <h1
            className="font-semibold font-Poppins
           text-[18px] text-[#0C3D55]"
          >
            Umi Khoirunisa
          </h1>
          <p className="text-[#333333] ">nisa8203@gmail.com</p>
        </div>
        <div className="w-[317px] h-[464px] bg-[#fff] mx-auto mt-[50px] rounded-t-[24px] ">
          <div className="flex p-7 px-9 mb-5">
            <p className="text-[18px] text-[#0C3D55] mr-10 font-Poppins font-semibold border-b-2 border-[#286280]">
              Document{" "}
            </p>
            <p className="text-[18px] text-[#0C3D55] font-Poppins font-semibold">
              Gambar
            </p>
          </div>
          <div className="flex items-center px-9">
            <IoDocumentOutline style={document} />
            <p className="text-[#286280] font-Poppins font-normal text-[16px] ml-3 ">
              Message here.pdf
            </p>
          </div>
          <div className="flex mt-5 items-center px-9">
            <IoDocumentOutline style={document} />
            <p className="text-[#286280] font-Poppins font-normal text-[16px] ml-3">
              Message here.pdf
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturChat;