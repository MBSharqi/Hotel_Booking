import React from "react";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const rooms = [
    { id: 1, image: "/public/images/h1img.jpg", title: "Deluxe Room", price: 120 },
    { id: 2, image: "/public/images/h1img.jpg", title: "Suite", price: 200 },
    { id: 3, image: "/public/images/h1img.jpg", title: "Standard Room", price: 90 },
  ];

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} image={room.image} title={room.title} price={room.price} />
      ))}
    </div>
  );
};

export default Rooms;
