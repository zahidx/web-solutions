import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

const QRCode = () => {
  const qrData = [
    {
      id: 1,
      platform: "WhatsApp",
      message: "Scan to Contact on WhatsApp",
      icon: <FaWhatsapp className="text-green-500 text-5xl glow-effect" />,
      qrCodeImage: "/qr-code.png", // Replace with your WhatsApp QR code image path
    },
    {
      id: 2,
      platform: "LinkedIn",
      message: "Scan to Connect on LinkedIn",
      icon: <FaLinkedin className="text-blue-700 text-5xl glow-effect" />,
      qrCodeImage: "/qr-code.png", // Replace with your LinkedIn QR code image path
    },
    {
      id: 3,
      platform: "Instagram",
      message: "Scan to Follow on Instagram",
      icon: <FaInstagram className="text-pink-600 text-5xl glow-effect" />,
      qrCodeImage: "/qr-code.png", // Replace with your Instagram QR code image path
    },
  ];

  return (
    <div className="mt-16 px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {qrData.map(({ id, platform, message, icon, qrCodeImage }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          {/* Message Text */}
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            {message}
          </p>

          {/* Icon Section with Glow Effect */}
          <div className="mb-6 relative">
            <div className="animate-ping absolute inset-0 z-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-30" />
            <div className="relative z-10 transform transition-transform duration-300 ease-in-out">
              {icon}
            </div>
          </div>

          {/* QR Code Image */}
          <div className="relative">
            <img
              src={qrCodeImage}
              alt={`${platform} QR Code`}
              className="mx-auto w-48 h-48 rounded-xl shadow-lg"
            />
          </div>

          {/* Platform Label */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">{platform}</p>
        </div>
      ))}
    </div>
  );
};

export default QRCode;
