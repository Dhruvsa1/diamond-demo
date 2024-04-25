// HomePage.tsx
import React, { useState } from "react";
import QrCodeScanner from "./QrCodeScanner";

const HomePage = () => {
  const [qrDetected, setQrDetected] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-6">
        <h1 className="text-[35pt] font-bold mb-4 mx-4">Scan your barcode</h1>
        <div className="flex justify-center items-center h-[280px] bg-gray-200 rounded-[40px] mx-[20px]">
          <QrCodeScanner onScan={setQrDetected} />
        </div>
        <div className="w-full h-[70px]"></div>
        {qrDetected && (
          <div className="mt-4 text-center bg-green-100 p-[10px] rounded-[20px] border-2 border-green-300">
            <span className="text-green-500">
              Successfully scanned a QR Code!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
