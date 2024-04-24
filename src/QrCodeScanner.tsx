// QrCodeScanner.tsx
const QrCodeScanner = () => {
  // You can adjust these values to suit your design needs
  const cornerWidth = "6px"; // This will control the thickness of the corner borders
  const cornerLength = "25%"; // This is the length of the corner border lines
  const borderRadius = "30px"; // This is the border-radius for the corners

  return (
    <div className="relative w-full h-full flex justify-center items-center ">
      {/* Define corner borders with explicit border width, lengths, and border radius */}
      <div
        className="absolute top-0 left-0 border-black "
        style={{
          borderLeftWidth: cornerWidth,
          borderTopWidth: cornerWidth,
          borderTopLeftRadius: borderRadius,
          width: cornerLength,
          height: cornerLength,
        }}
      ></div>
      <div
        className="absolute top-0 right-0 border-black "
        style={{
          borderRightWidth: cornerWidth,
          borderTopWidth: cornerWidth,
          borderTopRightRadius: borderRadius,
          width: cornerLength,
          height: cornerLength,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 border-black "
        style={{
          borderLeftWidth: cornerWidth,
          borderBottomWidth: cornerWidth,
          borderBottomLeftRadius: borderRadius,
          width: cornerLength,
          height: cornerLength,
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 border-black "
        style={{
          borderRightWidth: cornerWidth,
          borderBottomWidth: cornerWidth,
          borderBottomRightRadius: borderRadius,
          width: cornerLength,
          height: cornerLength,
        }}
      ></div>
    </div>
  );
};

export default QrCodeScanner;
