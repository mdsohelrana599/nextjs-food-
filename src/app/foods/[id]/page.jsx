import Image from "next/image";
import Link from "next/link";
import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold text-red-500">🍽️ Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[400px] md:h-full">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Details */}
        <div className="p-8 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800">
              {food.title}
            </h1>
            <p className="text-gray-500 mt-2">
              {food.category} • {food.area}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-green-600">
              ৳ {food.price}
            </span>

            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Premium Dish
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href={food.video}
              target="_blank"
              className="flex-1 text-center bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition duration-300"
            >
              ▶ Watch Recipe
            </a>

            <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition duration-300">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
