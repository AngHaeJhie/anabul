import React, { useState } from "react";
import { Link } from 'react-router-dom';

const KategoriKucing = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      <div className="h-80 relative [background:linear-gradient(0deg,#fcfeff,_#89bbd5_71.6%)]">
        <img
          className="h-72 flex absolute top-[40px] left-[577px] w-[283px] h-[271px] object-cover"
          src="img/anggora.webp"
        ></img>
      </div>

      <div>
        <h1 className="text-center text-3xl font-bold font-Poppins text-[#0C3D55] mb-8">
          Adopsi Kucing
        </h1>
      </div>
      <section className="grid grid-cols-7 gap-0">
        <div className="px-9">
          <a
            className="px-4 py-2 bg-[#0C3D55] text-[#FCFEFF] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Semua Jenis
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Anggora
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Persia
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Himalaya
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Scothis Fold
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Maine Coon
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]  no-underline text-[#518CAA]"
            href=""
          >
            Bengal
          </a>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] my-9 px-16 gap-8 font-Poppins">
        <div className="relative">
          <Link to="/detailkucing" className="block">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/anggora.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] no-underline font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu panjang, lembut dan tebal.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Anggora
              </h2>
            </div>
          </div>
          </Link>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/persia.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu panjang yang lebat dan hidung pesek yang manis.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Persia
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/scothis.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki telinga yang terlipat kedepan, memberikan penampilan
                menarik dan unik.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Scothis Fold
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/himalaya.png"
              alt="Kucing Maine Coon"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu panjang wajah datar mata biru yang memikat.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Himalaya
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/bengal.webp"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu yang berkilau dengan pola belang eksotis,
                menyerupai kucing liar.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Bengal
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/siamese.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh yang ramping , mata biru yang tajam dan pola
                warna yang kontras.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Siamese
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/sphynx.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Kucing tanpa bulu yang unik dengan kulit berlipat-lipat dan
                keringat lebi tinggi
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Sphynx
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/main coon.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh besar, bulu tebal dan "tutup telinga" yang
                mecolok.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Maine Coon
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border-none p-0.5 border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start  pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)  shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)]]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/ragdoll.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu setengah panjang dengan mata biru.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Ragdoll
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

export default KategoriKucing;