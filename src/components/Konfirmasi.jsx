import React from 'react';
import { useNavigate } from 'react-router-dom';

const Konfirmasi = () => {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-96 lg:w-128 xl:w-160">
        <h2 className="text-[24px] text-[#0C3D55] font-bold mb-4">Pendaftaran Akun Anda Berhasil!</h2>
        <p className="mb-6 text-[16px] text-[#286280]">Cek email anda untuk informasi selanjutnya</p>
        <button
          onClick={handleOk}
          className="bg-[#0C3D55] cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Oke
        </button>
      </div>
    </div>
  );
};

export default Konfirmasi;
