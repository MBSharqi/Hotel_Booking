import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 font-bold"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center items-start bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl mr-3" />
              <p className="text-gray-700">123 Galaxy Lounge Lane, Arugambay</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-yellow-500 text-2xl mr-3" />
              <p className="text-gray-700">contact@galaxylounge.com</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 text-2xl mr-3" />
              <p className="text-gray-700">+94 772067857</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
