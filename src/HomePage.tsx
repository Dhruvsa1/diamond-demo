// HomePage.tsx
import React from "react";
import QrCodeScanner from "./QrCodeScanner";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-6">
        <h1 className="text-[35pt] font-bold mb-4 mx-4 ">Scan your barcode</h1>
        <div className="w-full h-[70px]"></div>
        <div className="flex justify-center items-center h-[280px]  bg-gray-200  rounded-[40px] mx-[20px]">
          <QrCodeScanner />
        </div>
        <div className="w-full h-[70px]"></div>
        <div className="mt-4 text-center bg-green-100 p-[10px] rounded-[20px] border-2 border-green-300">
          <span className="text-green-500">
            Successfully checked out Tylinol #324536! There is 324 out of 400
            Tylinol left in stock.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
