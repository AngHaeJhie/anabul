import { useCallback } from "react";
import { Link } from 'react-router-dom';

const Contact = () => {


  const onGroupButtonClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
      <main className="self-stretch bg-white flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border gap-[7px] max-w-full text-left font-Poppins">
        <section className="w-[1422px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full text-left text-[36px] text-darkslategray font-heading-8-semibold mq750:pl-8 mq750:pr-8 mq750:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[85px] max-w-full lg:flex-wrap mq750:gap-[42px] mq450:gap-[21px]">
            <div className="w-[575px] flex flex-col items-start justify-start gap-[39px] min-w-[575px] max-w-full lg:flex-1 mq750:gap-[19px] mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                <div className="w-[474px] flex flex-row items-start justify-left py-0 px-5 box-border max-w-full">
                  <b className="w-[304px] relative pl-10 leading-[26px] font-semibold inline-block shrink-0 text-center text-[#0C3D55]">
                    Hubungi Kami
                  </b>
                </div>
                <p className="m-0 self-stretch relative text-xl leading-[35px] text-left mq450:text-base mq450:leading-[28px] text-[#286280]">
                  Jika Anda tertarik untuk mengadopsi salah satu kucing dan
                  anjing kami, mari kita tetap berkomunikasi
                </p>
              </div>
              <div className="w-[474px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="self-stretch shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-full px-8 py-3 bg-gray box-border flex flex-row items-start justify-start pt-[21px] px-6 pb-4 max-w-full border-[1px] border-solid border-steelblue-200">
                    <div className="h-[65px] w-[467.8px] relative shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-31xl bg-gray box-border hidden max-w-full border-[1px] border-solid border-steelblue-200" />
                    <input
                      className="w-[56.1px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray text-left inline-block p-0 z-[1] mq450:text-base"
                      placeholder="Nama"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-full px-8 py-3 bg-gray box-border flex flex-row items-start justify-start pt-[21px] px-6 pb-4 max-w-full border-[1px] border-solid border-steelblue-200">
                    <div className="h-[65px] w-[467.8px] relative shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-31xl bg-gray box-border hidden max-w-full border-[1px] border-solid border-steelblue-200" />
                    <input
                      className="w-[52px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray text-left inline-block p-0 z-[1] mq450:text-base"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-full px-8 py-3 bg-gray box-border flex flex-row items-start justify-start pt-[21px] px-6 pb-4 max-w-full border-[1px] border-solid border-steelblue-200">
                    <div className="h-[65px] w-[467.8px] relative shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-31xl bg-gray box-border hidden max-w-full border-[1px] border-solid border-steelblue-200" />
                    <input
                      className="w-[143.7px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray text-left inline-block p-0 z-[1] mq450:text-base"
                      placeholder="Nomor telepon"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[411px] max-w-full mq750:min-w-full">
              <img
                className="self-stretch h-[414px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="img/contact.webp"
              />
            </div>
          </div>
        </section>
        <section className="w-[1356px] flex flex-row items-start justify-center pt-0 px-5 pb-[4.9px] box-border max-w-full text-center text-lg text-steelblue-400 font-heading-8-semibold">
          <div className="w-[966px] flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
            <button
              className="cursor-pointer py-3.5 px-9 w-[214px] shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-full px-5 py-3 mb-5 box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-skyblue bg-[#286280]"
              onClick={onGroupButtonClick}>
              <div className="h-[52px] w-[214px] relative shadow-[0px_4px_7px_rgba(81,_140,_170,_0.56)] [backdrop-filter:blur(60px)] rounded-full px-5 py-3 bg-steelblue-400 box-border hidden border-[1px] border-solid border-steelblue-200 " />
              <Link to="/beranda"className="flex-1 relative text-xl leading-[20.8px] font-poppins text-gray text-center z-[1] no-underline">
              Hubungi Kami
              </Link>
            </button>
         </div>
        </section>  
      </main>
  );
};

export default Contact;
