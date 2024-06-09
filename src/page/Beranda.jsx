import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Populer from '../components/Populer';
import Category from '../components/Category';
import TopTier from'../components/TopTier';

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
        <div className="w-full h-full flex flex-col items-center justify-center text-base text-darkslategray-100 font-Poppins">
            <div className="relative w-full h-[748px]">
                <div className="absolute top-0 left-[50%] transform translate-x-[-50%] w-[1253px] h-[505px] text-xl justify-center items-center">
                    <div className="rounded-t-none rounded-b-21xl bg-white box-border w-[1150px] h-[506px] border-r-[1px] border-solid border-darkslategray-100 border-b-[1px] border-l-[1px]">
                        <img className="absolute top-[15px] left-[3px] rounded-t-none rounded-br-none rounded-bl-21xl w-[570px] h-[456px] object-cover" alt="" src="img/gambar1.webp" />
                        <div className="absolute top-20 left-[570px] leading-[26px] inline-block w-[515px] h-[238px]">
                            <div className="">
                                <h2 className="mt-[10px]">Adopsi Cinta,</h2>
                                <h2 className="m-0">Adopsi Hewan Peliharaan</h2>
                            </div>
                            <p>Situs adopsi hewan peliharaan kami adalah platform online penghubung orang-orang yang tertarik untuk mengadopsi hewan peliharaan dengan tempat penampungan hewan dan organisasi penyelamat di seluruh Indonesia. Kami memberikan informasi rinci tentang masing-masing dari mereka, termasuk riwayat kesehatan dan perilaku mereka, untuk membantu pengguna membuat keputusan terbaik.</p>
                        </div>
                    </div>
                        
                </div>

            {/* Opsi Pilihan */}
        <div className="relative top-[467px] left-[50%] transform -translate-x-1/2 w-[783px] h-20 text-sm">
            <div className="shadow-[4px_4px_4px_rgba(0,_0,_0,_0.4)] rounded-[50px] bg-steelblue-100 w-[783px] h-20" />
                <div className="absolute top-[2px] left-[55px] flex flex-row items-start justify-start gap-[20px]">
                <div className="w-44 relative h-[67px]">
                    <div className="leading-[26px] font-semibold text-white">Ras</div>
                    <div className="flex flex-row items-start justify-start mt-2">
                        <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                            <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                                <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingRas}>{selectedRasOption || 'Pilih Ras'}</div>
                                <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                    <button type='button' className='bg-transparent inline-flex h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingRas}> {isRasOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isRasOpen && (
                        <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-darkslategray-200 rounded-md shadow-lg'>
                            {ras.map((ras) => (
                                <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionRasClicked(ras)} key={ras}>
                                    <div className='block rounded-lg px-4 py-2 text-sm text-slategray font-semibold no-underline '>{ras}</div>
                                </button>
                            ))}
                        </div>
                    )}
            </div>
            <div className="w-px h-[68px] bg-darkslategray-100" />
            <div className="w-44 relative h-[67px]">
                <div className="leading-[26px] font-semibold text-white">Jenis Kelamin</div>
                <div className="flex flex-row items-start justify-start mt-2">
                    <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                        <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                            <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingJk}>{selectedJkOption || 'Pilih JK'}</div>
                            <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                <button type='button' className='bg-transparent inline-flex h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingJk}> {isJkOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                            </div>
                        </div>
                    </div>
                </div>
                {isJkOpen && (
                    <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-slategray rounded-md shadow-lg'>
                        {jk.map((jk) => (
                            <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionJkClicked(jk)} key={jk}>
                                <div className='block rounded-lg px-6 py-2 text-sm text-slategray font-semibold no-underline '>{jk}</div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-px h-[68px] bg-darkslategray-100" />
            <div className="w-44 relative h-[67px]">
                <div className="leading-[26px] font-semibold text-white">Usia</div>
                <div className="flex flex-row items-start justify-start mt-2">
                    <div className="w-44 shadow-[4px_4px_4px_#286280] rounded-[5px] bg-gray overflow-hidden shrink-0 flex flex-row items-center justify-start py-[9px] px-3 box-border">
                        <div className="w-[156px] relative h-[22px] overflow-hidden shrink-0">
                            <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[22px] font-semibold inline-block w-[97px] cursor-pointer" onClick={togglingUsia}>{selectedUsiaOption || 'Pilih Usia'}</div>
                            <div className='relative left-[125px] w-[156px] h-[22px] overflow-hidden shrink-0'>
                                <button type='button' className='bg-transparent inline-flex h-full items-center justify-center rounded-md px-2 text-slategray hover:bg-slategray hover:text-gray cursor-pointer' onClick={togglingUsia}> {isUsiaOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                            </div>
                        </div>
                    </div>
                </div>
                {isUsiaOpen && (
                    <div className='absolute top-[60px] left-[0px] w-44 bg-white border border-gray-300 rounded-md shadow-lg'>
                        {usia.map((usia) => (
                            <button type='button' className='bg-transparent hover:bg-zinc-200 w-44 text-left' onClick={onOptionUsiaClicked(usia)} key={usia}>
                                <div className='block rounded-lg px-4 py-2 text-sm text-slategray font-bold no-underline '>{usia}</div>
                            </button>
                        ))}
                    </div>
                )}
                </div>
                    <a className='absolute top-[20px] right-[-70px]' href='/search'><FaArrowAltCircleRight style={style} /></a>
                </div>
            </div>
                <div className="absolute top-[609px] bg-darkslategray-200 w-full h-[139px] overflow-hidden text-white flex justify-center items-center">
                    <div className="relative flex justify-start bg-gray box-border w-[1200px] h-[115px] border-[1px] border-solid border-darkslategray-100">
                        <img className="px-9" alt="animal shelter" src="img/Animal Shelter.webp" />
                        <div className="items-center justify-center text-darkslategray-100">
                            <div className="text-[20px]">
                                <p>Ingin menawarkan hewan peliharaan kamu?</p>
                                <p>Kamu juga bisa memasarkan kucing kamu ke website ini untuk diadopsi</p>
                            </div>
                        </div>
                        <div className="relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.4)] top-8 left-8 w-[220px] h-[50px] rounded-6xl  bg-steelblue-300">
                            <a className="absolute text-white top-[calc(50%-_13px)] left-[calc(50%-_70px)] leading-[26px] inline-block w-[152px] h-[30px] no-underline" href='/form'>
                                Tawarkan Adopsi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Category />
            <Populer />
            <TopTier />
        </div>
    );
};

export default Container;