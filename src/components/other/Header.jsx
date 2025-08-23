import React from "react";

const Header = () => {
  return (
  <>
  <div className="flex justify-between text-xl bg-[#1C1C1C] text-white p-3">
    <h1>Hello <br /> <span className="text-2xl font-bold"> Sarthak </span></h1>
    <button className="border-2 border-white rounded-md p-2 mr-3 cursor-pointer hover:bg-white hover:text-black transition">Logout</button>
  </div>
  </>
);};

export default Header;
