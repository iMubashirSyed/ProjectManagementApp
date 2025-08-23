import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // prevents form from reloading automatically, e is an event here
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // form fields will be empty after submitting the form
    setemail("");
    setpassword("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
        <div className="border-2 p-20 border-red-600 rounded-xl">
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              required
              value={email}
              type="email"
              placeholder="email"
              className="border border-red-600 outline-none rounded-full py-2 px-6 placeholder:text-gray-400"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              value={password}
              type="password"
              placeholder="password"
              className="border border-red-600 outline-none rounded-full py-2 px-6 mt-5 placeholder:text-gray-400"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button className="border border-red-600 rounded-full mt-7 bg-red-600 text-white font-bold text-lg px-6 py-2 cursor-pointer hover:bg-red-800">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
