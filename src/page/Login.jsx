import { useCallback, useState } from 'react';
import { ImUser } from "react-icons/im";
import { PiLockKeyFill } from "react-icons/pi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onButtonClick = useCallback((e) => {
    e.preventDefault();
    console.log("Login button clicked!");
  }, []);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen font-Poppins bg-gradient-to-r from-[#0C3D55] to-[#FCFEFF]">
      <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-16 flex flex-col items-center justify-center">
      <img src="img/logo.webp" alt="logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-20 mb-3" />
      <h1 className="text-xl md:text-2xl lg:text-3xl lg:text-[35px] font-bold text-white text-center mb-6">
        Buka hati, buka rumah adopsi hewan peliharaan
      </h1>
      <p className="text-white text-center mb-4 md:mb-6 px-2 md:px-4">
        Peluk Teman Bulu Anda: Mengapa Adopsi Kucing dan Anjing Dapat Membawa Kebahagiaan Tak Tertandingi ke Dalam Hidup Anda.
      </p>
      <img
        src="img/login.webp"
        alt="Kucing dan Anjing"
        className="w-full max-w-[355px] h-auto lg:h-[392px] rounded-lg"
      />
    </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-16 bg-white rounded-t-lg lg:rounded-l-lg flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#0C3D55] text-center mb-8">Masuk</h1>
        <form onSubmit={onButtonClick} className="mb-6">
          <div className="mb-6 relative">
            <label htmlFor="email" className="block text-sm text-[#286280] mb-2">
              Email atau nomor telepon
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                className="shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-xl box-border border-[1px] border-solid border-steelblue-10 appearance-none w-full py-4 pl-12 pr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan email atau nomor telepon"
              />
              <ImUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm text-[#286280] mb-2">
              Kata sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-xl box-border border-[1px] border-solid border-steelblue-10 appearance-none w-full py-4 pl-12 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan kata sandi"
              />
              <PiLockKeyFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
              <div
                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-500"
                onClick={toggleShowPassword}
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </div>
            </div>
          </div>
            <a href="/beranda" className="cursor-pointer px-5 no-underline bg-[#286280] rounded-[32px] w-full h-[55px] text-white font-semibold text-lg mb-6 text-[18px] focus:outline-none flex items-center justify-center">
              Masuk
            </a>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox rounded text-[#286280] h-5 w-5 border-gray-300 focus:ring-[#286280] focus:ring-opacity-50 focus:outline-none"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700">
                Ingat saya
              </label>
            </div>
            <a href="/contact" className="text-[#286280]">
              Butuh bantuan?
            </a>
          </div>
        </form>
        <div className="text-center mb-6">
          <span className="text-gray-700">Tidak memiliki akun?</span>
          <a href="/register" className="text-[#286280] ml-1">
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
