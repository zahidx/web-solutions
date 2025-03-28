// components/ContactInfo.js

import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Box } from '@mui/material';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ContactInfo;
