import FoodCard from "@/components/Foodcard/page";
import React from "react";
import { resolve } from "styled-jsx/css";

const getfood = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return data.foods || []
};

const FoodsPage = async() => {
    const foods = await getfood();

  return <div>
    <h2 className="text-4xl font-bold">Total <span className="text-yellow-500">{foods.length} </span>Foods Found</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
  {foods.map((food) => (
    
    <FoodCard key={food.id} food={food} />
  ))}
</div>

  </div>;
};

export default FoodsPage;
