import React from "react";
import { FaSwimmer, FaSpa, FaWifi, FaConciergeBell } from "react-icons/fa";

const Features = () => {
  const features = [
    { id: 1, icon: <FaSwimmer />, title: "Infinity Pool" },
    { id: 2, icon: <FaSpa />, title: "Luxury Spa" },
    { id: 3, icon: <FaWifi />, title: "Free Wi-Fi" },
    { id: 4, icon: <FaConciergeBell />, title: "24/7 Concierge" },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Our Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="p-4">
            <div className="text-yellow-400 text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
