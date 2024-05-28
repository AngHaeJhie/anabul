import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Container = () => {
    const ras = ['Anggora', 'Persia', 'Scottish Fold', 'Pomerania', 'Bichon Frise', 'Lainnya'];
    const jk = ['Jantan', 'Betina'];
    const usia = ['< 1 Bulan', '1-5 Bulan', '6-12 Bulan', '1-2 Tahun', '> 3 Tahun'];
    const [isRasOpen, setIsRasOpen] = React.useState(false);
    const [selectedRasOption, setSelectedRasOption] = useState(null);

    const togglingRas = () => setIsRasOpen(!isRasOpen);
    const onOptionRasClicked = (value) => () => {
        setSelectedRasOption(value);
        setIsRasOpen(false);
    }
    const [isJkOpen, setIsJkOpen] = React.useState(false);
    const [selectedJkOption, setSelectedJkOption] = useState(null);

    const togglingJk = () => setIsJkOpen(!isJkOpen);
    const onOptionJkClicked = (value) => () => {
        setSelectedJkOption(value);
        setIsJkOpen(false);
    }
    const [isUsiaOpen, setIsUsiaOpen] = React.useState(false);
    const [selectedUsiaOption, setSelectedUsiaOption] = useState(null);

    const togglingUsia = () => setIsUsiaOpen(!isUsiaOpen);
    const onOptionUsiaClicked = (value) => () => {
        setSelectedUsiaOption(value);
        setIsUsiaOpen(false);
    }

    const style = { color: "white", fontSize: "45px" }



    return (
        <div className="w-full relative h-[748px] overflow-hidden shrink-0 text-left text-base text-darkslategray-100 font-Poppins">
            <div className="absolute top-[609px] left-[0px] bg-darkslategray-200 w-[1340px] h-[139px] overflow-hidden text-white">
                <div className="absolute top-[12px] left-[64px] rounded-6xl bg-gray box-border w-[1200px] h-[115px] border-[1px] border-solid border-darkslategray-100" />
                <a className="absolute top-[43px] left-[1000px] shadow-[2px_4px_4px_rgba(0,_0,_0,_0.4)] w-[220px] h-[50px] rounded-6xl text-white " href='#'>
                    <div className="absolute top-[0px] left-[0px] rounded-6xl bg-steelblue-300 w-[220px] h-[50px] " />
                    <div className="absolute top-[calc(50%-_13px)] left-[calc(50%-_70px)] leading-[26px] inline-block w-[152px] h-[30px]">Tawarkan Adopsi</div>
                </a>
                <div className="absolute top-[43px] left-[207px] flex flex-col items-start justify-start gap-[10px] text-darkslategray-100">
                    <div className="w-[461px] relative text-[20px] leading-[26px] inline-block h-[25px] shrink-0">Ingin menawarkan hewan peliharaan kamu?</div>
                    <div className="relative text-base ">Kamu juga bisa memasarkan kucing kamu ke website ini untuk diadopsi</div>
                </div>
                <img className="absolute top-[20px] left-[87px] w-[100px] h-[100px] object-cover" alt="" src="img/Animal Shelter.png" />
            </div>
            <div className="absolute top-[2px] left-[94px] w-[1253px] h-[505px] text-xl">
                <div className="absolute top-[0px] left-[-0.93px] rounded-t-none rounded-b-21xl bg-white box-border w-[1150px] h-[506px] border-r-[1px] border-solid border-darkslategray-100 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[180px] left-[570px] leading-[26px] inline-block w-[515px] h-[238px]">Situs adopsi hewan peliharaan kami adalah platform online penghubung orang-orang yang tertarik untuk mengadopsi hewan peliharaan dengan tempat penampungan hewan dan organisasi penyelamat di seluruh Indonesia. Kami memberikan informasi rinci tentang masing-masing dari mereka, termasuk riwayat kesehatan dan perilaku mereka, untuk membantu pengguna membuat keputusan terbaik.</div>
                <div className="absolute top-[24px] left-[570px] text-[40px] leading-[65px] font-extrabold">
                    <p className="m-0">Adopsi Cinta,</p>
                    <p className="m-0">Adopsi Hewan Peliharaan</p>
                </div>

                <img className="absolute top-[15px] left-[0px] rounded-t-none rounded-br-none rounded-bl-21xl w-[570px] h-[456px] object-cover" alt="" src="img/gambar1.webp" />
            </div>
            <div className="absolute top-[467px] left-[270px] w-[783px] h-20 text-sm">
                <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.4)] rounded-[50px] bg-steelblue-100 w-[783px] h-20" />
                <div className="absolute top-[2px] left-[55px] flex flex-row items-start justify-start gap-[20px]">
                    <div className="w-44 relative h-[67px]">
                        <div className="absolute top-[0px] left-[0px] leading-[26px] font-semibold text-white">Ras</div>
                        <div className="absolute top-[27px] left-[0px] flex flex-row items-start justify-start">
                            <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                                <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingRas}>{selectedRasOption || 'Pilih Ras'}</div>
                                    <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                        <button type='button' className='bg-transparent inline-flex  h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingRas}> <IoIosArrowDown /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isRasOpen && (
                            <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-darkslategray-200 rounded-md shadow-lg'>
                                {ras.map((ras) => (
                                    <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionRasClicked(ras)} key={Math.random()}>
                                        <div className='block rounded-lg px-4 py-2 text-sm text-slategray font-semibold no-underline '>{ras}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-px relative box-border h-[68px] border-r-[0px] border-solid border-darkslategray-100" />
                    <div className="w-44 relative h-[67px]">
                        <div className="absolute top-[0px] left-[0px] leading-[26px] font-semibold text-white">Jenis Kelamin</div>
                        <div className="absolute top-[27px] left-[0px] flex flex-row items-start justify-start">
                            <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                                <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingJk}>{selectedJkOption || 'Pilih JK'}</div>
                                    <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                        <button type='button' className='bg-transparent inline-flex  h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingJk}> <IoIosArrowDown /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isJkOpen && (
                            <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-slategray rounded-md shadow-lg'>
                                {jk.map((jk) => (
                                    <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionJkClicked(jk)} key={Math.random()}>
                                        <div className='block rounded-lg px-6 py-2 text-sm text-slategray font-semibold no-underline '>{jk}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-px relative box-border h-[68px] border-r-[0px] border-solid border-darkslategray-100" />
                    <div className="w-44 relative h-[67px]">
                        <div className="absolute top-[0px] left-[0px] leading-[26px] font-semibold text-white">Usia</div>
                        <div className="absolute top-[27px] left-[0px] flex flex-row items-start justify-start">
                            <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                                <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingUsia}>{selectedUsiaOption || 'Pilih Usia'}</div>
                                    <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                        <button type='button' className='bg-transparent inline-flex  h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingUsia}> <IoIosArrowDown /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isUsiaOpen && (
                            <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-gray-300 rounded-md shadow-lg'>
                                {usia.map((usia) => (
                                    <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionUsiaClicked(usia)} key={Math.random()}>
                                        <div className='block rounded-lg px-4 py-2 text-sm text-slategray font-bold no-underline '>{usia}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                    </div>
                </div >
            </div >
            <div>
                <a href='#' className='absolute top-[485px] left-[980px]'><FaArrowAltCircleRight style={style} /></a>
            </div>
        </div >

    );
};

export default Container;
