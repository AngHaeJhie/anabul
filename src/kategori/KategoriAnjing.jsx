import React, { useState } from "react";
const KategoriAnjing = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-80 relative [background:linear-gradient(0deg,#fcfeff,_#89bbd5_71.6%)]">
        <img
          className="h-72 flex absolute top-[40px] left-[577px] w-[283px] h-[271px] object-cover"
          src="img/bichonn.webp"
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
            className="text-[#518CAA] px-4 py-2 bg-[#0C3D55] text-[#FCFEFF] rounded-[9px] no-underline"
            href=""
          >
            Semua Jenis
          </a>
        </div>
        <div>
          <a
            className="text-[#518CAA] px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline"
            href=""
          >
            Rotweiler
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline text-[#518CAA]"
            href=""
          >
            Maltese
          </a>
        </div>
        <div>
          <a
            className="text-[#518CAA] px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline"
            href=""
          >
            Pomerania
          </a>
        </div>
        <div>
          <a
            className="text-[#518CAA] px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline"
            href=""
          >
            Bulldog
          </a>
        </div>
        <div>
          <a
            className="text-[#518CAA] px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline"
            href=""
          >
            Poodle
          </a>
        </div>
        <div>
          <a
            className="text-[#518CAA] px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px] no-underline"
            href=""
          >
            Beagle
          </a>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(317px,1fr))] my-9 px-16 gap-8">
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              style={{
                boxShadow: "4px 4px 4px 0px rgba(40, 98, 128, 0.40) inset",
              }}
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/Golden retriever.webp"
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start  pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/german stepherd.webp"
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/dachshund.webp"
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/husky.webp"
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
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/labrador.webp"
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

      <div
        className="mx-auto cursor-pointer py-3 mb-3 pr-5 pl-[32px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] text-[#FCFEFF] bg-[#286280]
         rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280]
          hover:bg-[#0C3D55]"
      >
        <a
          href="/kategorianjing"
          className=" no-underline mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold font-heading-8-semibold text-gray text-left inline-block min-w-[65px] z-[1] mq450:text-[19px]"
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default KategoriAnjing;