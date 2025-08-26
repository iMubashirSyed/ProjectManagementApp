import React, { useState } from "react";

const Header = () => {
  // console.log(data)

  // const [userName, setuserName] = useState('')
  // if (!data) {
  //   setuserName('Admin')
  // }else{
  //   setuserName('data.firstname')
  // }

  const logoutUser = () => {
    localStorage.setItem("loggedInUserData", "");
    window.location.reload();
  };

  return (
    <div className="flex justify-between text-xl bg-[#1C1C1C] text-white p-3">
      <h1>
        Hello <br /> <span className="text-2xl font-bold"> userName </span>
      </h1>
      <button
        onClick={logoutUser}
        className="border-2 border-white rounded-md p-2 mr-3 cursor-pointer hover:bg-white hover:text-black transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
