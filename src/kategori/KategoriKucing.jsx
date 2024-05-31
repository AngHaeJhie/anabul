import React, { useState } from "react";
const KategoriKucing = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-80 relative [background:linear-gradient(0deg,#fcfeff,_#89bbd5_71.6%)]">
        <img
          className="h-72 flex absolute top-[40px] left-[577px] w-[283px] h-[271px] object-cover"
          src="img/anggora.png"
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
            Anggora
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Persia
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Himalaya
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Scothis Fold
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Maine Coon
          </a>
        </div>
        <div>
          <a
            className=" px-5 py-1 box-border border-solid border-[#0C3D55] border-[1px] rounded-[9px]"
            href=""
          >
            Bengal
          </a>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(317px,1fr))] my-9 px-16 gap-8">
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/anggora.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu panjang, lembut dan tebal.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Anggora
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/persia.JPG"
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
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/scothis.JPG"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki telinga yang terlipat kedepan, memberikan penampilan menarik dan unik.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Scothis Fold
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/kucing2.png"
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
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/kucing1.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki bulu yang berkilau dengan pola belang eksotis, menyerupai kucing liar.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Bengal
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/kucing4.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh yang ramping , mata biru yang tajam dan pola warna yang kontras.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Siamese
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/kucing6.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Kucing tanpa bulu yang unik dengan kulit berlipat-lipat dan keringat lebi tinggi
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Sphynx
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/kucing5.png"
              alt="Kucing Anggora"
            />
            <div className="isi-info px-5">
              <p className="self-stretch relative text-[15px] font-medium text-base text-[#0C3D55] pb-5">
                Memiliki tubuh besar, bulu tebal dan "tutup telinga" yang mecolok.
              </p>
              <h2 className=" flex-1 relative text-[14px] font-bold text-[#0C3D55] ">
                Kucing Maine Coon 
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[519px] w-[313px] border border-solid border-skyblue bg-[#89BBD5] rounded-[20px] box-border shrink-0 flex flex-col items-start justify-start pt-1 px-0.5 pb-[19px] gap-[11.5px] shadow-[4px_4px_6px_rgba(40,98,128,0.8)]">
            <img
              className="h-[387px] w-full relative rounded-[20px] object-cover bg-white"
              src="img/ragdol cat.jpg"
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
      
    </div>
  );
};

export default KategoriKucing;