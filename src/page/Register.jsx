import React, { useState } from 'react';
import Konfirmasi from '../components/Konfirmasi';

const Register = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSuccess = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full relative min-h-screen overflow-hidden text-center text-[24px] text-steelblue-100 font-Poppins">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
          src="img/bg.jpg"
        />
        <img
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[108px] h-20 object-cover"
          alt=""
          src="img/logo.webp"
        />
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 shadow-lg rounded-xl bg-darkslategray-50 w-11/12 max-w-2xl p-4 sm:p-4 md:p-6">
          <h1 className="font-semibold text-[24px] text-darkslategray-100 mt-2">
            Membuat Akun
          </h1>
          <p className="text-[15px] -mt-[5px]">Masukkan data diri dengan benar</p>
          <div className="mt-2 text-left text-base mx-auto w-full max-w-2xl">
            <p className="mb-1">Email</p>
            <input
              className="w-full rounded-xl border border-darkslategray-200 bg-transparent p-3 mb-1 placeholder:text-[#518caa] focus:outline-none"
              type="text"
              placeholder="Masukkan email"
            />
            <p className="mt-1">Nomor Telepon</p>
            <input
              className="w-full rounded-xl border border-darkslategray-200 bg-transparent p-3 -mt-[7px] placeholder:text-[#518caa] focus:outline-none"
              type="text"
              placeholder="Masukkan nomor telepon"
            />
            <p className="mt-1.5">Kata sandi</p>
            <input
              className="w-full rounded-xl border border-darkslategray-200 bg-transparent p-3 -mt-[7px] placeholder:text-[#518caa] focus:outline-none"
              type="password"
              placeholder="Masukkan kata sandi"
            />
            <div className="-mt-[7px]">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-steelblue-100" />
                <p className="text-sm">Gunakan 8 karakter atau lebih</p>
              </div>
              <div className="flex items-center gap-1 -mt-[10px]">
                <div className="w-2 h-2 rounded-full bg-steelblue-100" />
                <p className="text-sm">Gunakan angka (contoh: 1234)</p>
              </div>
              <div className="flex items-center gap-1 -mt-[10px]">
                <div className="w-2 h-2 rounded-full bg-steelblue-100" />
                <p className="text-sm">Gunakan huruf besar dan kecil (contoh: Aa)</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center gap-2">
            <button
              onClick={handleSuccess}
              className="block w-full max-w py-2 rounded-full bg-[#286280] text-white text-[14px] font-semibold mx-auto cursor-pointer"
            >
              Daftar
            </button>
            <div className="text-sm text-steelblue-100">
              <p className="m-0">Dengan membuat akun, Anda menyetujui</p>
              <p className="m-0">
                <span className="underline">Ketentuan penggunaan</span> dan{' '}
                <span className="underline">Kebijakan Privasi</span>.
              </p>
            </div>
            <div className="text-sm text-steelblue-100">
              <span>Sudah memiliki akun? </span>
              <a href="/" className="underline text-darkslategray-100">
                Masuk
              </a>
            </div>
          </div>
        </div>
        {showPopup && <Konfirmasi onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default Register;
