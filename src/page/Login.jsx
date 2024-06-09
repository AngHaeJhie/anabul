import {useCallback} from 'react';
import { ImUser } from "react-icons/im";
import { PiLockKeyFill } from "react-icons/pi";

const Login =() => {
  const onButtonClick = useCallback(() => {
   
  }, []);

  return (
    <div className="flex h-screen font-Poppins bg-gradient-to-r from-[#0C3D55] to-[#FCFEFF]">
      <div className="w-1/2 p-16 ">
      <img src="img/logo.webp" alt="logo" className="w-[100px] h-20 flex justify-center ml-[200px]" />
        <div className="flex items-center">
          <h1 className="text-3xl text-[35px] font-bold text-white">
            Buka hati, buka rumah adopsi hewan peliharaan
          </h1>
        </div>
        <p className="text-white mt-6">
          Peluk Teman Bulu Anda: Mengapa Adopsi Kucing dan Anjing Dapat
          Membawa Kebahagiaan Tak Tertandingi ke Dalam Hidup Anda.
        </p>
        <img
          src="img/login.webp"
          alt="Cat and Dog"
          className="w-[355px] h-[392px] mb-[0px] ml-[100px] rounded-lg"
        />
      </div>
      <div className="w-1/2 p-16 bg-white rounded-[20px]">
        <h1 className="text-3xl  text-center flex items-center justify-center w-[570px] font-bold text-[#0C3D55] mb-4">Masuk</h1>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm mb-2 text-[#286280]">
            Email atau nomor telepon
          </p>
          <div className="relative w-full">
            <ImUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="email"
              className="shadow-[0px_4px_7px_rgba(81,140,170,0.56)] backdrop-blur-sm rounded-xl box-border border border-steelblue-10 appearance-none w-full pl-10 pr-5 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
              placeholder="Masukkan email atau nomor telepon"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="block text-gray-700 text-sm mb-2 text-[#286280]">
            Kata sandi
          </p>
          <div className="relative w-full">
            <PiLockKeyFill className="absolute left-3 top-1/2 transform -translate-y-1/2 color-grey" />
          <input
            type="password"
            id="password"
            className="shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-xl box-border  border-[1px] border-solid border-steelblue-10 appearance-none w-full py-4 pr-5 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan kata sandi"
          /> 
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] px-8 bg-[#286280] absolute top-[360px] ml-[70px] rounded-[32px] w-[455px] h-[55px] overflow-hidden z-[2]"
          onClick={onButtonClick}
              >
          <div className="absolute top-[5px] left-[calc(50%-_30px)] flex flex-row items-center justify-center gap-[8px]">
            <a className="relative mt-[10px] text-[18px] font-semibold font-Poppins text-gray text-center inline-block min-w-[61px] no-underline" 
            href="/beranda">
                Masuk
            </a>
          </div>
        </button>

        <div className="flex items-center justify-between mb-4">
          <div className="form-group mt-20">
            <label
              type="checkbox"
              id="remember"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#286280] focus:outline-none transition duration-150 ease-in-out"
            />
            <p className="ml-2 text-gray-700">
              Ingat aku
            </p>
          </div>
          <a href="/contact" className="text-[#286280] mt-20">
            Butuh bantuan?
          </a>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-700">Tidak memiliki akun?</span>
          <a href="/register" className="text-[#286280]">
            Daftar
          </a>
        </div>
        <p className="text-gray-600 text-xs text-center">
          Halaman ini dilindungi oleh Google reCAPTCHA untuk memastikan
          bahwa Anda bukan bot.{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Pelajari lebih lanjut.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
