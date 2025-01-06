import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ image, title, price }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: { room: { image, title, price } }, // Pass room details via state
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">${price} per night</p>
        <button
          onClick={handleBookNow}
          className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
