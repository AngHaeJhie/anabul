import { useState, useCallback } from "react";
import { ImUser } from "react-icons/im";
import { PiLockKeyFill } from "react-icons/pi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const Login = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onTidakMemilikiAkunClick = useCallback(() => {
    // Please sync "Halaman Register" to the project
  }, []);

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-[638px] relative bg-gray overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <div className="h-[1024px] w-[740px] relative bg-skyblue max-w-[calc(100%_-_0px)]" />
      <section className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-end justify-start pt-[110px] px-[25px] pb-[354px] box-border max-w-full z-[1] text-center text-16xl text-gray font-poppins">
        <div className="w-[587px] flex flex-col items-start justify-start pt-0 px-0 pb-[65px] box-border min-h-[174px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit z-[1] mq450:text-2xl mq767:text-9xl">
            <span className="leading-[46px] text-[35px]">Buka hati, buka rumah adopsi hewan peliharaan</span>
          </h1>
        </div>
        <p className="mb-2 w-[587px] relative text-[17px] font-medium flex items-center justify-center shrink-0 max-w-full z-[1] ml-[-587px]">
          Peluk Teman Bulu Anda: Mengapa Adopsi Kucing dan Anjing Dapat Membawa
          Kebahagiaan Tak Tertandingi ke Dalam Hidup Anda.
        </p>
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full bg-gradient-to-r from-[#518CAA] to-[#FCFEFF]">
          <img
            className="absolute top-[22px] left-[258px] w-[100px] h-20 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="img/logo.webp"
          />
          <img
            className="absolute top-[246px] left-[131px] w-[355px] h-[392px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="img/login.webp"
          />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[641px] rounded-l-[20px] bg-white w-[637px] max-w-full z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-white w-full h-full hidden" />
            <form className="m-0 absolute top-[23px] left-[49px] rounded-3xl bg-gray w-[539px] h-[592px] overflow-hidden max-w-full z-[2]">
              <h1 className="m-0 absolute top-[31px] left-[40px] text-16xl font-bold font-poppins text-[#0C3D55] text-center flex items-center justify-center w-[459px] mq450:text-2xl mq767:text-9xl">
                Masuk
              </h1>
              <div className="absolute top-[84px] left-[40px] w-[459px] h-[263px]">
                <p className="absolute top-[10px] left-[0px] text-sm font-poppins text-steelblue-200 text-left"> 
                  Email atau nomor telepon
                </p>
                <div>
                  <input
                    className="[outline:none] bg-gray absolute top-[47px] left-[8px] shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-xl box-border w-[455px] h-[55px] border-[1px] border-solid border-steelblue-100 [padding-left:80px]"
                    type="text"
                    placeholder="Masukkan email atau nomor telepon"
                  />
                </div>
                <div className="absolute top-[65px] left-[26px] w-5 h-5 object-cover z-[1]"><ImUser color="grey"/></div>
                <div className="absolute top-[157px] left-[0px] w-full h-[55px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-xl bg-gray box-border w-full h-full border-[1px] border-solid border-steelblue-100" />
                  <input
                    className="[border:none] [outline:none] font-inter text-smi bg-[transparent] absolute top-[calc(50%_-_7.5px)] left-[81px] text-dimgray text-left inline-block p-0 z-[1]"
                    placeholder="Masukkan kata sandi"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <div className="absolute top-[20px] left-[26px] w-5 h-5 object-cover z-[1]"><PiLockKeyFill  color="grey"/></div>
                  <div className="absolute top-[20px] right-[26px] w-5 h-5 object-cover z-[1] cursor-pointer" onClick={toggleShowPassword}>
                    {showPassword ? <IoMdEye  color="grey" /> : <IoMdEyeOff color="grey" />}
                </div>
                </div>
                <div className="absolute top-[84px] left-[0] w-[459px] h-[263px]">
                  <p className="absolute top-[35px] left-[0px] text-sm font-poppins text-steelblue-200 text-left"> 
                    Kata sandi
                  </p>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-steelblue-200 absolute top-[338px] left-[40px] rounded-[32px] w-[455px] h-[55px] overflow-hidden z-[2]"
                onClick={onButtonClick}
              >
                <div className="absolute top-[5px] left-[calc(50%-_30px)] flex flex-row items-center justify-center gap-[8px]">
                  <h1 className="relative text-[18px] font-semibold font-poppins text-gray text-center inline-block min-w-[61px]">
                    Masuk
                  </h1>
                </div>
              </button>
              <div className="absolute top-[430px] left-[75px] text-mini font-poppins text-left inline-block min-w-[71px] text-[#0C3D55]">
                Ingat aku
              </div>
              <div className="absolute top-[408px] left-[368px] flex flex-row items-start justify-start p-0.5">
                <p className="relative text-mini font-poppins text-darkslategray text-center inline-block min-w-[120px] text-[#0C3D55]">
                  Butuh bantuan?
                </p>
              </div>
              <input
                className="m-0 absolute top-[427px] left-[42px] w-6 h-6 overflow-hidden"
                type="checkbox"
              />
            
              <div className="absolute top-[471px] left-[36px] w-[459px] flex flex-row items-start justify-center p-0.5 box-border max-w-full">
              <span className="font-poppins text-steelblue-200">{`Tidak memiliki akun? `}</span>
                <a
                  className="relative text-mini text-center cursor-pointer"
                  onClick={onTidakMemilikiAkunClick}> 
                  <span className="relative [text-decoration:underline] text-[#0C3D55]">
                    <span className="font-medium font-poppins text-[#0C3D55]">Daftar</span>
                  </span>
                </a>
              </div>

              <div className="m-0 absolute top-[521px] left-[37px] text-smi font-poppins text-center inline-block w-[457px]">
                <span className="text-steelblue-200">{`Halaman ini dilindungi oleh Google reCAPTCHA untuk memastikan bahwa Anda bukan bot. `}</span>
                <span className="text-[#0C3D55]">
                  Pelajari lebih lanjut.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;