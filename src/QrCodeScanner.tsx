import React, { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

const QrCodeScanner = ({ onScan }: { onScan: (detected: boolean) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isQrPresent, setIsQrPresent] = useState(false); // Tracks presence of QR code

  const codeReader = new BrowserQRCodeReader();

  const checkScan = () => {
    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice("", videoRef.current, (result, error) => {
          if (result) {
            console.log(`QR Code detected: ${result.getText()}`);
            setIsQrPresent(true);
            onScan(true);
          } else {
            setIsQrPresent(false);
            onScan(false);
            if (error) {
              console.error(`Scanning error: ${error}`);
            }
          }
        })
        .catch((err) => {
          console.error(`Error initializing QR scan: ${err}`);
        });
    }
  };

  useEffect(() => {
    checkScan();
    return () => {};
  }, [onScan]);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <video
        ref={videoRef}
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg"
      />

      {isQrPresent ? <p>QR Code Detected</p> : <p>No QR Code Detected</p>}
    </div>
  );
};

export default QrCodeScanner;
