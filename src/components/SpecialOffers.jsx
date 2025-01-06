import React from "react";

const SpecialOffers = () => {
  const offers = [
    { id: 1, title: "Winter Special", description: "Get 20% off on all bookings made this winter!", image: "/public/images/h1img.jpg" },
    { id: 2, title: "Spa Package", description: "Enjoy complimentary spa access with your stay!", image: "/public/images/h1img.jpg" },
    { id: 3, title: "Family Discount", description: "Book for 3 nights and get the 4th night free!", image: "/public/images/h1img.jpg" },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Special Offers</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{offer.title}</h3>
              <p className="mt-2 text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
