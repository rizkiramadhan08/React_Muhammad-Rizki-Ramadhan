import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import ikon dari react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Nama Website */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-lg font-bold">Ngoding</h1>
          </div>
          
          {/* Informasi Kontak */}
          <div className="mb-4 md:mb-0">
            <p>📞 Nomor Telepon: (123) 456-7890</p>
            <p>📍 Alamat: Jl. Veteran No. 123, Jakarta, Indonesia</p>
          </div>

          <div className="flex space-x-8">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
              <FaTwitter size={24} className="mr-2" /> 
              <span>Twitter</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
              <FaFacebook size={24} className="mr-2" /> 
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
              <FaInstagram size={24} className="mr-2" /> 
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
