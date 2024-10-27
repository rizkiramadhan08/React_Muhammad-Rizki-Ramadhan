import React from 'react';
import about from '../assets/img/about.svg'; 

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={about} alt="About Us" className="w-3/4 rounded-lg shadow-lg" />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Selamat datang di Ngoding! Kami adalah platform yang didedikasikan untuk membantu Anda belajar coding dengan
            mudah dan menyenangkan.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Tim kami terdiri dari para ahli di bidang teknologi yang berpengalaman dan berkomitmen untuk memberikan
            materi yang berkualitas tinggi dan pengalaman belajar yang luar biasa.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Bergabunglah dengan Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
