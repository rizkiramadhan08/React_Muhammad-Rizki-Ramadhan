import React, { useState } from 'react';

const ContactUs = () => {
  // State untuk menampung input form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handler untuk menangani perubahan pada input form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set submitted data saat form disubmit
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Submitted Data:</h2>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
