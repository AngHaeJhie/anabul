import React, { useState } from 'react';
import { GoLocation } from "react-icons/go";
import { TbGenderGenderfluid } from "react-icons/tb";

const DetailAnjing = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div className="w-full relative bg-steelblue-200 overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
          <main className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray flex flex-col items-end justify-start pt-[62px] px-0 pb-0 box-border gap-[51px] max-w-full mq750:gap-[25px] mq750:pt-[26px] mq750:box-border mq1025:pt-10 mq1025:box-border">
        <div className="self-stretch h-[960px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray hidden" />
        <section className="w-[1396px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-[40px] text-steelblue-300 font-prompt">
          <div className="w-[1104px] flex flex-col items-end justify-start gap-[31px] max-w-full mq750:gap-[15px]">
            <div className="w-[939px] flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <h1 className="m-0 w-[148px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-5xl mq1025:text-[32px]">
                  Alzena
                </h1>
                <div className="w-[434px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full text-left text-5xl text-darkslategray font-heading-8-semibold">
                  <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit z-[1] mq450:text-[19px]">
                    Ras : Kucing Anggora
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[140px] max-w-full text-left text-xl text-darkslategray font-heading-8-semibold mq750:gap-[35px] mq450:gap-[17px] mq1025:flex-wrap mq1100:gap-[70px]">
              <img
                className="h-[495px] flex-1 relative mb-9 rounded-[40px] max-w-full overflow-hidden object-cover min-w-[324px] min-h-[495px] z-[1]"
                loading="lazy"
                alt=""
                src="img/anggora.webp"
                style={{
                  boxShadow:" 4px 4px 4px 0px rgba(12, 61, 85, 0.50), 4px 4px 4px 0px rgba(12, 61, 85, 0.50) inset"
                }}
              />
              <div className="w-[466px] flex flex-col items-start justify-start gap-[39.7px] min-w-[466px] max-w-full mq750:gap-[20px] mq750:min-w-full mq1025:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full">
                  <p className="m-0 flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
                    Memiliki ekor dan bulu lembut, panjang, mengembang yang
                    indah, hidung dan telinga yang panjang, kepala yang
                    berbentuk segitiga.
                  </p>
                </div>
                <div className="w-[375px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="w-[140px] flex flex-row items-start justify-start gap-[36px]">
                    <div className="h-[20px] w-[40px] relative z-[1]"> <TbGenderGenderfluid /> </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <b className="self-stretch relative font-semibold z-[1] mq450:text-base">{`Usia : `}</b>
                      </div>
                    </div>
                    <div className="w-[99px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-center">
                      <div className="self-stretch relative font-medium z-[1] mq450:text-base">{`<1 Bulan`}</div>
                    </div>
                  </div>
                </div>
                <div className="w-[344px] flex flex-row items-end justify-start gap-[23px] max-w-full mq450:flex-wrap">
                  <div className="h-[20px] w-[40px] relative z-[1]"> <TbGenderGenderfluid /> </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border min-w-[162px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative font-semibold z-[2] mq450:text-base">
                        Jenis Kelamin :
                      </div>
                      <div className="w-[85px] relative font-medium text-center inline-block shrink-0 z-[1] ml-[-32px] mq450:text-base">
                        Betina
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[379px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="w-[165px] flex flex-row items-start justify-start gap-[37px]">
                      <div className="h-[20px] w-[40px] relative z-[1]"> <GoLocation /> </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <b className="self-stretch relative font-semibold z-[1] mq450:text-base">
                          Lokasi :
                        </b>
                      </div>
                    </div>
                    <div className="w-[103px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-center">
                      <div className="self-stretch relative font-medium z-[1] mq450:text-base">
                        Jakarta
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[38px]">
                  <button className="cursor-pointer [border:none] pt-[18.8px] px-[29px] pb-[8.2px] bg-[transparent] w-[290px] flex flex-row items-start justify-start box-border relative whitespace-nowrap z-[1]">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5px] bg-gray box-border border-[1px] border-solid border-darkslategray" />
                    <div className="flex-1 relative text-[25px] font-medium font-heading-8-semibold text-darkslategray text-center mb-1.5 text-[#0C3D55] z-[1]">
                      Adopsi Sekarang
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
      );
    };
    
    
  export default DetailAnjing;