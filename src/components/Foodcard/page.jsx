import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500">{category}</p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-xl font-bold text-orange-500">
            ৳{price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-3">
          <button className="w-1/2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-800 transition">
            Add to Cart
          </button>

          <Link href={`/foods/${id}`} className="w-1/2 text-center border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
