import React, { useState } from "react";
import { Link } from 'react-router-dom';

const KategoriAnjing = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative h-80 bg-gradient-to-t from-[#fcfeff] to-[#89bbd5]">
        <img
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 object-cover"
          src="img/bichonn.webp"
          alt="Bichon"
        />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold text-[#0C3D55] mb-8">
          Adopsi Anjing
        </h1>
      </div>
      <section className="font-Poppins grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 bg-[#0C3D55] text-[#FCFEFF] rounded-[9px] no-underline block text-center"
      href=""
    >
      Semua Jenis
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Rotweiler
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Maltese
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Pomerania
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Bulldog
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Poodle
    </a>
  </div>
  <div className="px-2">
    <a
      className="text-[#518CAA] px-4 py-2 border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline block text-center"
      href=""
    >
      Beagle
    </a>
  </div>
</section>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] my-9 px-4 md:px-8 lg:px-16 gap-8 font-Poppins">
  <div className="relative">
    <Link to="/detailanjing" className="block">
      <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
        <img
          style={{
            boxShadow: "4px 4px 4px 0px rgba(40, 98, 128, 0.40) inset",
          }}
          className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
          src="img/poodle.webp"
          alt="Anjing Poodle"
        />
        <div className="isi-info px-5 ">
          <p className="relative text-[15px] font-Poppins font-medium text-base  text-[#0C3D55] pb-5">
            Memiliki bulu keriting, cerdas dan lincah
          </p>
          <h2 className="font-Poppins flex-1 relative text-[14px] font-bold text-[#0C3D55]">
            Anjing Poodle
          </h2>
        </div>
      </div>
    </Link>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/pomerania.webp"
        alt="Anjing Pomerania"
      />
      <div className="isi-info px-5">
        <p className="self-stretch relative font-Poppins text-[15px] font-medium text-base text-[#0C3D55] pb-5">
          Ras anjing paling cerdas dan aktif dalam aktivitas sesuatu.
        </p>
        <h2 className="flex-1 relative text-[14px] font-bold font-Poppins text-[#0C3D55]">
          Anjing Pomerania
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/Golden retriever.webp"
        alt="Anjing Golden Retriever"
      />
      <div className="isi-info px-5">
        <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] font-Poppins pb-5">
          Memiliki bulu tebal berwarna emas, dan wajah yang ramah
        </p>
        <h2 className="font-Poppins flex-1 relative text-[14px] font-bold text-[#0C3D55]">
          Anjing Golden Retriever
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/bulldog.webp"
        alt="Anjing Bulldog"
      />
      <div className="isi-info px-5">
        <p className="self-stretch relative text-[15px] font-Poppins font-medium text-base text-[#0C3D55] pb-5">
          Memiliki tubuh kokoh, telinga tegak, dan bulu ganda berlapis
        </p>
        <h2 className="flex-1 font-Poppins relative text-[14px] font-bold text-[#0C3D55]">
          Anjing Bulldog
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/german stepherd.webp"
        alt="Anjing Jerman Shepherd"
      />
      <div className="isi-info px-5">
        <p className="font-Poppins self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
          Memiliki tubuh kekar, kepala besar, dan wajah berkerut
        </p>
        <h2 className="font-Poppins flex-1 relative text-[14px] font-bold text-[#0C3D55]">
          Anjing Jerman Shepherd
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/dachshund.webp"
        alt="Anjing Dachshund"
      />
      <div className="isi-info px-5">
        <p className="self-stretch font-Poppins relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
          Memiliki tubuh sedang, telinga panjang, dan moncong yang khas
        </p>
        <h2 className="flex-1 font-Poppins relative text-[14px] font-bold text-[#0C3D55]">
          Anjing Dachshund
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/beagle.webp"
        alt="Anjing Beagle"
      />
      <div className="isi-info px-5">
        <p className="self-stretch relative text-[15px] font-medium font-Poppins text-base text-[#0C3D55] pb-5">
          Memiliki mata biru/coklat, bulu tebal, dan ekor berbulu lebat
        </p>
        <h2 className="flex-1 relative text-[14px] font-bold text-[#0C3D55] font-Poppins">
          Anjing Beagle
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/husky.webp"
        alt="Anjing Siberian Husky"
      />
      <div className="isi-info px-5">
        <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] font-Poppins pb-5">
          Memiliki mata biru/coklat, bulu tebal, dan ekor berbulu lebat
        </p>
        <h2 className="font-Poppins flex-1 relative text-[14px] font-bold text-[#0C3D55]">
          Anjing Siberian Husky
        </h2>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="h-[519px] w-full border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
      <img
        className="h-[357px] w-full relative rounded-[20px] object-cover bg-white"
        src="img/labrador.webp"
        alt="Anjing Labrador Retriever"
      />
      <div className="isi-info px-5">
        <p className="self-stretch font-Poppins relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
          Memiliki tubuh berotot, kepala lebar, dan ekor tebal
        </p>
        <h2 className="mb-[20px] flex-1 relative font-Poppins text-[14px] font-bold text-[#0C3D55]">
          Anjing Labrador Retriever
        </h2>
      </div>
    </div>
  </div>
</section>


<div
  className="mx-auto cursor-pointer py-3 mb-3 pr-5 pl-8 md:pl-10 lg:pl-12 w-full max-w-[254px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] text-[#FCFEFF] bg-[#286280] rounded-[20px] box-border flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-[#286280] hover:bg-[#0C3D55]"
>
  <a
    href="/kategorikucing"
    className="no-underline mx-auto font-Poppins px-2 py-1 text-2xl md:text-3xl font-semibold text-gray text-left inline-block min-w-[65px]"
  >Lihat Selengkapnya
  </a>
    
</div>
</div>
  );
};

export default KategoriAnjing;