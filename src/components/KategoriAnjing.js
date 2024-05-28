import React, { useState } from "react";
const KategoriAnjing = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-80 relative [background:linear-gradient(0deg,#fcfeff,_#89bbd5_71.6%)]">
        <img
          className="h-72 flex absolute top-[40px] left-[577px] w-[283px] h-[271px] object-cover"
          src="img/bichon.png"
        ></img>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold font-Poppins text-[#0C3D55] mb-8">
          Adopsi Anjing
        </h1>
      </div>
      <section className="grid grid-cols-7 gap-0">
        <div className="px-9">
          <a
            className="px-4 py-2 bg-[#0C3D55] text-[#FCFEFF] rounded-[9px]"
            href=""
          >
            Semua Jenis
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Rotweiler
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Maltese
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Pomerania
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Bulldog
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Poodle
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Beagle
          </a>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(317px,1fr))] my-9 px-16 gap-8">
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/poodle.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu keriting, cerdas dan lincah
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Poodle
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/pomerania.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Ras anjing paling cerdas dan aktif dalam aktivitas sesuatu.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Pomerania
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/Golden retriever.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu tebal berwarna emas, dan wajah yang ramah
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Golden Retriever
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/bulldog.webp"
              alt="Kucing Maine Coon"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh kokoh, telinga tegak, dan bulu ganda berlapis
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Bulldog
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/german stepherd.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh kekar, kepala besar, dan wajah berkerut
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Jerman Shepherd
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/dachshund.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh sedang, telinga panjang, dan moncong yang khas
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Dachshund
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/beagle.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki mata biru/coklat, bulu tebal, dan ekor berbulu lebat
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Beagle
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/husky.jpg"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki mata biru/coklat, bulu tebal, dan ekor berbulu lebat
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Siberian Husky
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/labrador.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh berotot, kepala lebar, dan ekor teba
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Anjing Labrador Retriever
              </h2>
            </div>
          </div>
        </div>
      </section>



      <div className="w-full relative shadow-[0px_4px_5px_rgba(0,_0,_0,_0.4)] h-[54px] text-center text-[20px] text-white font-poppins">
        <div className="relative absolute top-[0px] left-[calc(50%_-_122px)] rounded-[20px] bg-steelblue w-[244px] h-[54px]">
          <a
            href=""
            className="absolute top-[15px] left-[calc(50%_-_105px)] leading-[24px] font-semibold inline-block w-[209.1px]"
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default KategoriAnjing;