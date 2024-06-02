import { useCallback } from 'react';
import { PiArrowFatRight } from "react-icons/pi";


const Frame = () => {

	const onGroupContainerClick = useCallback(() => {
		// Add your code here
	}, []);

	return (
		<><h1 className=" text-center text-3xl font-bold font-Poppins text-[#0C3D55] mb-8">
			Pilihan teratas untuk diadopsi
		</h1>
			<div className="w-full relative overflow-x-auto flex flex-row items-start justify-start gap-[23px] text-left text-base font-poppins">
				<div className=" w-[249px] relative h-[376px] shrink-0 cursor-pointer " onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-contain bg-white" alt="" src="img/anggora.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] text-center bg-[#0C3D55] rounded-full text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Kucing Anggora</h4>
						<h4 className="text-white font-medium">Pusat Adopsi</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain" alt="" src=""> <PiArrowFatRight /> </div>
				</div>

				<div className="w-[249px] relative h-[376px] shrink-0 cursor-pointer "  onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-cover bg-white " alt="" src="img/poodle.webp" />
					<div className="absolute top-[24.42px] left-[24px] leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Anjing Poodle</h4>
						<h4 className="text-white font-medium">Pemilik Sebelumnya</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>

				<div className=" w-[249px] relative h-[376px] shrink-0 cursor-pointer " onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-contain bg-white" alt="" src="img/persia.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] text-center bg-[#0C3D55] rounded-full text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Kucing Persia</h4>
						<h4 className="text-white font-medium">Pusat Adopsi</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>

				<div className="w-[249px] relative h-[376px] shrink-0 cursor-pointer" onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="bichon" src="img/bichon.webp" />
					<div className="absolute top-[24px] left-[23px] leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Bichon Frise</h4>
						<h4 className="text-white font-medium">Pemilik Sebelumnya</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>

				<div className=" w-[249px] relative h-[376px] shrink-0 cursor-pointer " onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-contain bg-white" alt="" src="img/bulldog.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] text-center bg-[#0C3D55] rounded-full text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Bulldog</h4>
						<h4 className="text-white font-medium">Pusat Adopsi</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>
				<div className="w-[249px] relative h-[376px] shrink-0 cursor-pointer" onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/scothis.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Schotis</h4>
						<h4 className="text-white font-medium">Pemilik Sebelumnya</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>

				<div className="w-[249px] relative h-[376px] shrink-0 cursor-pointer" onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/chihuahua.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Anjing Chihuahua</h4>
						<h4 className="text-white font-medium">Pusat Adopsi</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>					
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>

				<div className="w-[249px] relative h-[376px] shrink-0 cursor-pointer" onClick={onGroupContainerClick}>
					<div className="absolute top-[0px] left-[0px] rounded-[20px] w-[249px] h-[376px] bg-[#89BBD5]" alt="" src="" />
					<img className="absolute top-[11.51px] left-[8px] rounded-[20px] shadow-xl w-[233px] h-[235.3px] object-cover bg-white" alt="" src="img/beagle.webp" />
					<div className="absolute top-[24px] left-[24px] text-mini leading-[26px] rounded-full bg-[#0C3D55]  text-white shadow-md px-3">Adopsi</div>
					<div className="absolute flex flex-col space-y-2 top-[260px] left-[18px] leading-[2px] justify-start items-start">
						<h4 className="text-[#0C3D55] font-bold">Beagle</h4>
						<h4 className="text-white font-medium">Pemilik Sebelumnya</h4>
						<div className="">
							<p className="text-[#0C3D55] [text-shadow:0px_2px_2px_#fcfeff]">Adopsi Sekarang</p>
						</div>
					</div>
					<div className="absolute top-[335px] left-[199.9px] w-[40.2px] h-[40.2px] object-contain rounded-full" alt="" src=""> <PiArrowFatRight /></div>
				</div>
			</div></>);
};

export default Frame;