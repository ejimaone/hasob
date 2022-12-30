import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import logo from "../assets/images/edited.png";

const Cart = () => {
  return (
    <div className="rounded border-solid border flex items-center justify-between h-40 w-[97%] border-green-700 my-12 mx-auto pr-10 pl-16;">
      <div className="flex items-center gap-10">
        <img src={logo} alt=""></img>
        <h1 className="font-extrabold	 tracking-widest	">
          730 days savings bond
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <button className="rounded border-solid border font-medium py-1 px-2 border-green-500 m-5">
          Automatic
        </button>
        <button className="text-red-500">Delete</button>
      </div>
      <div className="rounded border-solid border relative border-green-600 ">
        <input className="h-[50px] pl-2 w-56" value="300,000.00" />
        <button className="absolute text-black left-[63%] top-[50%] translate-y-[-50%] ">
          <FaMinusCircle />
        </button>
        <p className="absolute left-[74%] top-[50%] translate-y-[-50%]">01</p>
        <button className="absolute text-black right-[5%] top-[50%] translate-y-[-50%]">
          <FaPlusCircle />
        </button>
      </div>
    </div>
  );
};

export default Cart;
