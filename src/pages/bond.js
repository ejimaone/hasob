import React, { useContext } from "react";
import { CartContext } from "../stores/CartStore";

import { cards } from "../utils";

const Bond = () => {
  const store = useContext(CartContext);
  const addingWishListHandler = (item) => {
    store.setWishList((prev) => {
      return [...prev, item];
    });
  };

  const Card = (item) => {
    return (
      <div className="mt-10 border-2 border-green-700 rounded-md p-5 w-full ">
        <div className="flex items-center justify-between">
          <div>LO</div>
          <div className="text-xs rounded-xl p-2 text-gray-700 bg-emerald-200">
            FGN Savings Bond
          </div>
        </div>
        <div className=" mt-5 text-bold text-center">
          <p className="text-2xl"> {item.name}</p>
          <p className="text-xs mt-2 text-gray-600"> {item.due}</p>
        </div>
        <div className="flex text-sm justify-between mt-3 items-center">
          <p className="text-gray-600">Minimum</p>
          <p>{item.minimum}</p>
        </div>
        <div className="flex text-sm justify-between mt-5 items-center">
          <p className="text-gray-600">% Per Year</p>
          <p>{item.percentage}</p>
        </div>
        <div className="flex text-sm justify-between mt-5 items-center">
          <p className="text-gray-600">Interest Payment</p>
          <p>{item.interest}</p>
        </div>
        <div className="flex text-sm justify-between mt-5 items-center">
          <p className="text-gray-600">Opening</p>
          <p>{item.opening}</p>
        </div>
        <div className="flex text-sm justify-between mt-5 items-center">
          <p className="text-gray-600">Closing Date</p>
          <p>{item.closing}</p>
        </div>
        <div className="flex text-sm justify-between mt-5 items-center">
          <p className="text-gray-600">Settlement</p>
          <p>{item.settlement}</p>
        </div>
        <div className="flex justify-center mt-5 w-full ">
          <button
            className="bg-green-700 text-white px-6 py-3 rounded "
            onClick={() => addingWishListHandler(item, item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto  justify-between  gap-20 max-h-fit">
        {cards.map((card) => {
          return <div key={card.id}>{Card(card)} </div>;
        })}
      </div>
    </div>
  );
};

export default Bond;
