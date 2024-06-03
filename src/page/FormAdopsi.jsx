import React, { useState } from "react";
const Adopsi = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" px-[120px] py-3">
      <div>
        <div className="max-w-[1130px]  mx-auto">
          <h1 className=" text-center text-[#0C3D55] text-[40px] mb-[20px]  font-Poppins">
            Formulir Buka Adopsi
          </h1>
        </div>
        <form
          action="#"
          className=" grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-[50px] font-Poppins  "
        >
          <div className="my-[10px]">
            <label
              for="namaPemilik"
              className=" block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Nama Pemilik:
            </label>
            <input
              className="w-full p-[12px] border-solid border-[1px] rounded-[8px] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
              type="text"
              placeholder="ketik disini"
              id="namaPemilik"
              name="namaPemilik"
              required
            />
          </div>
          <div className="row my-[10px]">
            <label
              for="namaHewan"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Nama Hewan:
            </label>
            <input
              className="w-full p-[12px] border-solid border-[1px] rounded-[8px] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
              type="text"
              placeholder="ketik disini"
              id="namaHewan"
              name="namaHewan"
              required
            />
          </div>
          <div className="row my-[10px]">
            <label
              for="kategoriHewan"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Kategori Hewan:
            </label>
            <select
              className="w-full p-[12px] border-solid border-[1px]  rounded-[8px] bg-transparent border-[#0c3d55] outline-none placeholder:text-[15px]
              text-[#518caa] placeholder:text-normal"
              id="kategoriHewan"
              name="kategoriHewan"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="anjing">Anjing</option>
              <option value="kucing">Kucing</option>
            </select>
          </div>
          <div className="row my-[10px]">
            <label
              for="rasHewan"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Ras Hewan:
            </label>
            <input
              className="w-full p-[12px] border-solid border-[1px] rounded-[8px] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
              type="text"
              placeholder="ketik disini"
              id="rasHewan"
              name="rasHewan"
            />
          </div>
          <div className="row my-[10px]">
            <label
              for="usia"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Usia:
            </label>
            <input
              type="number"
              id="usia"
              name="usia"
              min="0"
              className="w-full p-[12px] border-solid border-[1px] rounded-[8px] text-[#518caa] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
            />
          </div>
          <div className="row my-[10px]">
            <label
              for="jenisKelamin"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Jenis Kelamin:
            </label>
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              required
              className="w-full p-[12px] border-solid bg-transparent border-[1px] text-[#518caa] rounded-[8px] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="jantan">Jantan</option>
              <option value="betina">Betina</option>
            </select>
          </div>
          <div className="row my-[10px]">
            <label
              for="lokasi"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Lokasi:
            </label>
            <input
              className="w-full p-[12px] border-solid border-[1px] rounded-[8px] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa]"
              type="text"
              placeholder="ketik disini"
              id="lokasi"
              name="lokasi"
            />
          </div>
          <div className="row my-[10px]">
            <label
              for="fotoHewan"
              className="block mb-[5px] text-[20px] font-normal text-[#0c3d55]"
            >
              Foto Hewan:
            </label>
            <input
              type="file"
              id="fotoHewan"
              name="fotoHewan"
              className="w-full p-[10px] border-solid border-[1px] t rounded-[8px] text-[#518caa] border-[#0c3d55] outline-none placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa] "
            />
          </div>
        </form>
        <div class="row deskripsi my-[10px]">
          <label
            className="block my-[7px] text-[20px] font-normal text-[#0c3d55]"
            for="deskripsi"
          >
            Deskripsi:
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows="5"
            className="w-full p-[12px] border-solid border-[1px] rounded-[8px] border-[#0c3d55] outline-none
             placeholder:text-[15px] placeholder:text-normal placeholder:text-[#518caa] resize-none"
          ></textarea>
        </div>
        <div
          className="mx-auto cursor-pointer py-3 pr-5 pl-[22px]  w-[253.9px] shadow-[4px_4px_4px_rgba(12,_61,_85,_0.4)] text-[#FCFEFF] bg-[#286280]
         rounded-[20px] box-border flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-[#286280]
          hover:bg-[#0C3D55]"
        >
          <a
            href=""
            className="no-underline mx-auto font-Poppins px-2 py-1 bg-[] text-3xl font-semibold font-heading-8-semibold text-gray text-left inline-block min-w-[65px] z-[1] mq450:text-[19px]"
          >
            kirim
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adopsi;