import React, { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className=" text-center text-3xl font-bold font-Poppins text-[#0C3D55] mb-8">
        Cari Hewan Pilihan Anda
      </h1>
      <section className="kategoriHewan flex place-content-center mb-9 ">
        <div className="flex-row flex">
          <div className="round mr-8 flex flex-col">
            <img src="img/0a184dad-aead-4d6b-98b3-b1e693caba28.webp " className="w-80 mb-4 " />
            <button>
              <a className=" mt-16 py-2 px-8 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[10px] bg-gray box-border border-[2px] border-solid border-[#3C6477] transition hover:bg-[#0C3D55] hover:text-[#fff]  " href='#KategoriKucing'>Kucing</a>
            </button>
          </div>
          <div className="round flex flex-col">
            <img src="img/76f4990c-0bd8-4faf-9c2d-2b5ecc12573b.webp " className="w-80  mb-4" />
            <button>
              <a className=" py-2 px-8 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[10px] bg-gray box-border border-[2px] border-solid border-[#3C6477] transition hover:bg-[#0C3D55] hover:text-[#fff] "
                href='#KategoriKucing'>  Anjing  </a>                       </button>
          </div></div>
      </section >

      <div className="container-2"></div>

      <h1 class="text-center text-3xl font-bold mb-8 text-[#0C3D55]">
        Hewan Peliharaan Populer
      </h1>

      <div className="bg-[#3C6477] h-1/5">
        <section className="flex px-8 py-8">
          <figure className="grid-item item1 ">
            <div className="relative h-full">
              <img
                className="w-80 h-96 rounded-2xl h-full object-cover"
                src="img/anggora.webp "
              ></img>
              <figcaption className="absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-4 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                Anggora
              </figcaption>
            </div>
          </figure>
          <div className="Poto-kecil mx-4" >
            <figure className="grid-item item1 mb-5 ">
              <div className="relative">
                <img
                  className="w-80 h-96 rounded-2xl h-full"
                  src="img/pomerania.webp "
                ></img>
                <figcaption className="absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-4 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                  Pomerania
                </figcaption>
              </div>
            </figure>
            <figure className="grid-item item1 ">
              <div className="relative">
                <img
                  className="w-80 h-56 rounded-2xl"
                  src="img/scothis.webp "
                ></img>
                <figcaption className="absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-4 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                  Scotish
                </figcaption>
              </div>
            </figure>
          </div>
          <figure className="grid-item item1 mr-4">
            <div className="relative h-full">
              <img
                className="w-80 h-96 rounded-2xl h-full "
                src="img/35e7e92f-2548-43d0-b606-3444e60f2ec6.webp "
              ></img>
              <figcaption className="absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-4 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                Bischon Frise
              </figcaption>
            </div>
          </figure>
          <div className="Poto-kecil mr-4 ">
            <figure className="grid-item item1 mb-5">
              <div className="relative">
                <img
                  className="w-80 h-56 rounded-2xl"
                  src="img/poodle.webp "
                ></img>
                <figcaption className=" absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-6 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                  Poodle
                </figcaption>
              </div>
            </figure>
            <figure className="grid-item item1">
              <div className="relative">
                <img
                  className="w-80 h-96 rounded-2xl h-full "
                  src="img/persia.webp "
                ></img>
                <figcaption className=" absolute bottom-[2%] left-[2%] bg-[#0C3D55] text-[#fff] py-0.5 px-6 shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[20px] bg-gray box-border border-[2px] border-solid border-[#3C6477] text-base">
                  persia
                </figcaption>
              </div>
            </figure>
          </div>
        </section>
      </div>
    </div >
  );
};

export default Category;
