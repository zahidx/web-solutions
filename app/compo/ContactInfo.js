import { FaEnvelope, FaWhatsapp, FaClock, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Box } from '@mui/material';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Basic Contact Info */}
      <Box className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-red-500 text-2xl" />
          <div>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">Email us</p>
            <p className="text-gray-600 dark:text-gray-400">support@envobyte.com</p>
          </div>
        </div>
      </Box>
      <Box className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <div>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">WhatsApp</p>
            <p className="text-gray-600 dark:text-gray-400">+1 (667) 777 2477</p>
          </div>
        </div>
      </Box>

      {/* Advanced Contact Info */}
      <Box className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <FaClock className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">Support Hours</p>
            <p className="text-gray-600 dark:text-gray-400">Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>
      </Box>

      {/* Social Media Links */}
      <Box className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-blue-700 text-2xl" />
          <div>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">LinkedIn</p>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Visit our LinkedIn</a>
          </div>
        </div>
      </Box>

      <Box className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <FaInstagram className="text-pink-600 text-2xl" />
          <div>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">Instagram</p>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">Follow us on Instagram</a>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ContactInfo;
