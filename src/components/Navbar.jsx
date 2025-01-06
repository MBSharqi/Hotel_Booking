import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Galaxy Lounge</h1>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/rooms" className="hover:text-yellow-400">Rooms</a></li>
          <li><a href="/booking" className="hover:text-yellow-400">Booking</a></li>
          <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
