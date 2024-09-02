import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // filter type burger
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  

  // filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12">
      <h1
        className="text-black font-bold text-4xl text-center
      "
      >
        Top Rated Menu Items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-black">Filter type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=> setFoods(data)} className="m-1 border-gray-700 bg-white hover:bg-cyan-600 text-black">
              All
            </button>
            <button onClick={()=> filterType('pudding')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              Healthy Foods
            </button>
            <button onClick={()=> filterType('burger')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              Burgers
            </button>
            <button onClick={()=> filterType('pizza')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              Pizzas
            </button>
            <button onClick={()=> filterType('salad')} className="m-1 border-gray-700 bg-white hover:bg-cyan-600 text-black">
              Salads
            </button>
            <button onClick={()=> filterType('chicken')} className=" m-1 border-gray-700 bg-white hover:bg-cyan-600 text-black">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-black"> Filter price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPrice('$')}className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              $
            </button>
            <button onClick={()=> filterPrice('$$')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              $$
            </button>
            <button onClick={()=> filterPrice('$$$')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              $$$
            </button>
            <button onClick={()=> filterPrice('$$$$')} className="m-1  border-gray-700 bg-white hover:bg-cyan-600 text-black">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
            <img
            className="w-full h-[200px object-cover rounded-t-lg"
            src={item.image} alt={item.name}/>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="">
                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
