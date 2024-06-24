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
            <img
              src="img/0a184dad-aead-4d6b-98b3-b1e693caba28.webp "
              className="w-80 mb-4 "
            />

            <a
              className="mx-auto w-[180px] no-underline text-[#0C3D55] px-[65px] py-2  shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[10px] bg-gray box-border border-[2px] border-solid border-[#3C6477] transition hover:bg-[#0C3D55] hover:text-[#fff]  "
              href="/kategorikucing"
            >
              Kucing
            </a>
          </div>
          <div className="round flex flex-col">
            <img
              src="img/76f4990c-0bd8-4faf-9c2d-2b5ecc12573b.webp "
              className="w-80  mb-4"
            />

            <a
              className="mx-auto w-[180px] mt-[10px] py-2 no-underline text-[#0C3D55] px-[65px] shadow-[4px_4px_4px_rgba(81,_140,_170,_0.6)] rounded-[10px] bg-gray box-border border-[2px] border-solid border-[#3C6477] transition hover:bg-[#0C3D55] hover:text-[#fff] "
              href="/kategorianjing"
            >
              {" "}
              Anjing{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
