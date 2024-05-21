import { useCallback } from "react";

const KategoriKucing = () => {
  const onLinkItemContainer1Click = useCallback(() => {
    // Please sync "Kontak" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Detail Kucing" to the project
  }, []);

  return (
        <div className="self-stretch flex flex-row items-start justify-center pt-10 px-5 pb-0 box-border max-w-full mt-[-4px]">
          <div className="h-[311px] w-[1440px] relative  hidden max-w-full">
          <img
            className="h-[271px] w-[283px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-38@2x.png"
          />
        </div>
      
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[70px] box-border max-w-full mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[57px] max-w-full text-center text-[40px] text-darkslategray font-heading-8-semibold mq750:gap-[28px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[63px] mq450:gap-[16px] mq750:gap-[31px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
              <h1 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit mq450:text-[24px] mq450:leading-[14px] mq1050:text-[32px] mq1050:leading-[19px]">
                Adopsi Kucing
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1 pl-0 gap-[35px] text-xl text-gray lg:flex-wrap mq750:gap-[17px]">
              <div className="h-[45px] flex-1 relative min-w-[152px] max-w-[155px]">
                <div className="absolute top-[0px] left-[3.7px] rounded-3xs bg-steelblue-400 w-[146.3px] h-[45px]" />
                <div className="absolute top-[10px] left-[0px] leading-[24px] font-semibold inline-block w-[155px] z-[1] mq450:text-base mq450:leading-[19px]">
                  Semua jenis
                </div>
              </div>
              <button className="cursor-pointer py-[9px] px-[31.9px] bg-gray flex-[0.5755] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="relative text-xl leading-[24px] font-heading-8-semibold text-darkslategray text-center inline-block min-w-[88px] z-[1] mq450:text-base mq450:leading-[19px]">
                  Anggora
                </div>
              </button>
              <button className="cursor-pointer py-[7px] px-[45.6px] bg-gray flex-[0.3987] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="flex-1 relative text-xl leading-[27px] font-heading-8-semibold text-darkslategray text-center inline-block min-w-[63.8px] z-[1] mq450:text-base mq450:leading-[19px]">
                  Persia
                </div>
              </button>
              <button className="cursor-pointer py-[7px] pr-[27.3px] pl-[27.4px] bg-gray flex-[0.6342] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="flex-1 relative text-xl leading-[27px] font-heading-8-semibold text-darkslategray text-center inline-block min-w-[100.3px] z-[1] mq450:text-base mq450:leading-[19px]">
                  Himalaya
                </div>
              </button>
              <button className="cursor-pointer py-[7px] px-[11.7px] bg-gray flex-[0.8361] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] whitespace-nowrap border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="flex-1 relative text-xl leading-[27px] font-heading-8-semibold text-darkslategray text-center z-[1]">
                  Scottish Fold
                </div>
              </button>
              <button className="cursor-pointer py-[7px] px-[11.7px] bg-gray flex-[0.8361] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] whitespace-nowrap border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="flex-1 relative text-xl leading-[27px] font-heading-8-semibold text-darkslategray text-center z-[1]">
                  Maine coon
                </div>
              </button>
              <button className="cursor-pointer py-[7px] px-[11.7px] bg-gray flex-[0.8361] rounded-3xs box-border flex flex-row items-start justify-start min-w-[152px] max-w-[155px] border-[1px] border-solid border-steelblue-400 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-300 mq450:flex-1">
                <div className="h-[45px] w-[155px] relative rounded-3xs bg-gray box-border hidden border-[1px] border-solid border-steelblue-400" />
                <div className="flex-1 relative text-xl leading-[27px] font-heading-8-semibold text-darkslategray text-center z-[1] mq450:text-base mq450:leading-[19px]">
                  Bengal
                </div>
              </button>
            </div>
          </div>
          
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[42px] pl-[43px] box-border max-w-full text-left text-mini lg:pl-[21px] lg:pr-[21px] lg:box-border">
            <div className="h-[1705px] flex-1 overflow-x-auto flex flex-row flex-wrap items-start justify-start relative gap-[80px_132.5px] max-w-full mb-[-2px] pb-0.5">
              <div
                className="h-[517px] w-[315px] !m-[0] absolute top-[0px] left-[0px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] bg-skyblue box-border shrink-0 flex flex-col items-start justify-start rounded-lg pt-1 px-1 py-1 pb-[25px] gap-[30px] cursor-pointer border-[1px] border-solid border-skyblue bg-[#89BBD5]"
                onClick={onFrameContainerClick}
              >
                <img
                  className="self-stretch flex-1 relative rounded-lg shadow-2xl overflow-hidden object-cover bg-white w-[313px] h-[387px] "
                  loading="lazy"
                  alt=""
                  src="img/anggora.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-8">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                      Memiliki bulu panjang, lembut, dan tebal.
                    </div>
                    <div className="relative text-sm font-extrabold font-inter text-center inline-block min-w-[112px] text-[#0C3D55]">
                      Kucing Anggora
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[517px] w-[315px] !m-[0] absolute top-[0px] left-[448px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] bg-skyblue box-border shrink-0 flex flex-col items-start justify-start rounded-lg pt-1 px-1 py-1 pb-[19px] gap-[11.5px] cursor-pointer border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg shadow-2xl overflow-hidden object-cover bg-white w-[313px] h-[387px]"
                  alt=""
                  src="img/persia.JPG"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-[39px]">
                  <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                    Memiliki bulu panjang yang lebat dan hidung pesek yang manis
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[39px] text-sm font-inter">
                  <div className="relative text-sm font-extrabold font-inter text-center inline-block min-w-[95px] text-[#0C3D55]">
                    Kucing Persia
                  </div>
                </div>
              </div>
              <div className="h-[517px] w-[315px] !m-[0] absolute top-[0px] left-[896px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[19px] gap-[11.5px] border-[1px] cursor-pointer border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg shadow-2xl overflow-hidden object-cover bg-white w-[313px] h-[387px]"
                  alt=""
                  src="img/scothis.JPG"
                />
                <div className="w-[297px] flex flex-row items-start justify-start py-0 px-6 box-border">
                  <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                    Memiliki telinga yang terlipat ke depan, memberikn
                    penampilan menarik dan unik
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-6 text-sm font-inter">
                  <div className="relative font-extrabold inline-block min-w-[95px] text-[#0C3D55]">
                    Kucing Scottish Fold
                  </div>
                </div>
              </div>

              <div className="h-[517px] w-[315px] !m-[0] absolute top-[595px] left-[0px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[18px] gap-[12px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover bg-white w-[313px] h-[387px]"
                  alt=""
                  src="img/main coon.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[29px]">
                  <div className="h-[69px] flex-1 relative font-medium text-sm text-[#0C3D55]">
                    Memiliki tubuh besar, bulu tebal, dan “tutup telinga” yang
                    mencolok.
                  </div>
                </div>
                <div className="w-[200px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-sm font-inter text-[#0C3D55]">
                  <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                    Kucing Maine coon
                  </div>
                </div>
              </div>
              <div className="h-[517px] w-[315px] !m-[0] absolute top-[595px] left-[448px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[17px] gap-[17px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover bg-white w-[313px] h-[387px]"
                  alt=""
                  src="img/himalaya.png"
                />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[29px]">
                    <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                      Memiliki bulu panjang, wajah datar serta mata biru yang
                      memikat
                    </div>
                  </div>
                    <div className="w-[200px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-sm font-inter text-[#0C3D55]">
                     <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                      Kucing Himalaya
                     </div>
                    </div>
              </div>
              <div className="h-[517px] w-[315px] !m-[0] absolute top-[595px] left-[448px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[17px] gap-[15px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-4xl max-w-full overflow-hidden max-h-full object-cover bg-white w-[313px] h-[387px]"
                  alt=""
                  src="img/bengal.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-8">
                    <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                      Memiliki bulu yang berkilau dengan pola belang eksotis,
                      menyerupai kucing liar
                    </div>
                </div>
                  <div className="w-[200px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-sm font-inter text-[#0C3D55]">
                    <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                      Kucing Bengal
                    </div>
                  </div>
              </div>

              <div className="h-[517px] w-[315px] !m-[0] absolute top-[1190px] left-[0px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[19px] gap-[11.5px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover bg-white"
                  alt=""
                  src="img/sphynx.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[31px]">
                  <div className="flex-1 relative font-medium text-sm text-[#0C3D55]">
                    kucing tanpa bulu yang unik dengan kulit yang berlipat-lipat
                    dan keringat yang lebih tinggi.
                  </div>
                </div>
                <div className="w-[204px] flex flex-row items-start justify-start py-0 px-[31px] box-border text-sm font-inter">
                  <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                    Kucing Sphynx
                  </div>
                </div>
              </div>
               <div className="h-[517px] w-[315px] !m-[0] absolute top-[595px] left-[448px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-[19px] gap-[11.5px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover bg-white"
                  alt=""
                  src="img/siamese.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[33px] pl-8">
                  <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                    Memiliki tubuh yang ramping, mata biru yang taam, dan pola
                    warna yang kontras.
                  </div>
                </div>
                <div className="w-[200px] flex flex-row items-start justify-start py-0 px-[33px] box-border text-sm font-inter text-[#0C3D55]">
                  <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                    Kucing Siamese
                  </div>
                </div>
              </div>
              <div className="h-[517px] w-[315px] !m-[0] absolute top-[1190px] left-[896px] shadow-[4px_4px_6px_rgba(40,_98,_128,_0.8)] rounded-lg bg-skyblue box-border shrink-0 flex flex-col items-start justify-start pt-1 px-1 py-1 pb-9 gap-[19px] border-[1px] border-solid border-skyblue bg-[#89BBD5]">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="img/ragdoll.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[37px] pl-8">
                    <div className="self-stretch relative font-medium text-sm text-[#0C3D55]">
                      Memiliki bulu setengah panjang dengan mata biru
                    </div>
                    <div className="flex-1 relative font-extrabold text-[#0C3D55]">
                      Kucing Ragdoll
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] ">
            <button className="cursor-pointer [border:none] py-[15px] px-[17px] bg-steelblue-400 w-[244px] shadow-[0px_4px_5px_rgba(0,_0,_0,_0.4)] rounded-xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-steelblue-300 bg-[#0C3D55]">
              <div className="h-[54px] w-[244px] relative rounded-xl bg-steelblue-400 hidden" />
              <div className="flex-1 relative text-xl leading-[24px] font-semibold font-heading-8-semibold text-white text-center z-[1]">
                Lihat selengkapnya
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KategoriKucing;