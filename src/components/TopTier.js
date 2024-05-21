import { useCallback } from 'react';
import { PiArrowFatRight } from "react-icons/pi";




const Frame = () => {
  	
  	const onGroupImageClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
		<><h1 className=" text-center text-3xl font-bold font-Poppins text-[#0C3D55] mb-8">
				Pilihan teratas untuk diadopsi
			</h1>
			<div className="w-full relative overflow-x-auto flex flex-row items-start justify-start gap-[23px] text-left text-base font-poppins">
				
					<div className=" w-[249px] relative h-[376px] shrink-0 cursor-pointer " onClick={onGroupContainerClick}>
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-contain bg-white" alt="" src="img/anggora.png" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] text-center bg-[#0C3D55] rounded-full text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pusat Adopsi</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Kucing Anggora</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px] [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang </div>
						<div className="absolute top-[342px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""> <PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0 ">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white " alt="" src="img/maltese.jpg" />
						<div className="absolute top-[24.42px] left-[24px] leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pemilik Sebelumnya</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Anjing Maltese</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px] [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0 ">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/persia.JPG" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pusat Adopsi</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Kucing Persia</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px] [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""><PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/bichon.png" />
						<div className="absolute top-[24px] left-[23px] leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pemilik sebelumnya</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Bichon Frise</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px]  [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]" >Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""><PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[12px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/bulldog.jpg" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pusat Adopsi</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55] ">Bulldog</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px]  [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""><PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/beagle.jpg" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pusat Adopsi</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Beagle</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px]  [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[200.01px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""><PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/chihuahua.jpg" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pusat Adopsi</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Anjing Chihuahua</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px]  [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[200.01px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""><PiArrowFatRight /> </div>
					</div>
					<div className="w-[249px] relative h-[376px] shrink-0">
						<div className="absolute top-[0px] left-[0px] rounded-lg w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
						<img className="absolute top-[11.51px] left-[8px] rounded-lg shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/scothis.JPG" />
						<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
						<div className="absolute top-[292.87px] left-[18px] leading-[26px] text-white">Pemilik Sebelumnya</div>
						<b className="absolute top-[260.9px] left-[18px] leading-[26px] text-[#0C3D55]">Kucing Scothis</b>
						<div className="absolute top-[332.52px] left-[18px] leading-[26px]  [text-shadow:0px_2px_2px_#fcfeff] text-[#0C3D55]">Adopsi Sekarang</div>
						<div className="absolute top-[342px] left-[200.01px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""><PiArrowFatRight /></div>
					</div>
				</div></>);
};

export default Frame;