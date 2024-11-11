import React, { useState } from 'react';

import user from '../assets/User.png';
import pass from '../assets/Pass.png';
import email from '../assets/Email.png';

export const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="border-2 p-[50px] rounded-md bg-white ">
      <h1 className="text-4xl text-center mb-9 font-bold text-violet-600 ">{action}</h1>
      <div className="flex flex-col gap-4">
        {action === "Signup" && (
          <div className="flex justify-start bg-gray-200 h-12 w-[300px] p-3 items-center rounded-lg shadow-md">
            <img src={user} alt="User Icon" className="h-[20px] w-[20px]" />
            <input
              type="text"
              className="bg-transparent pl-4 border-none outline-none"
              placeholder="Name"
            />
          </div>
        )}
        <div className="flex justify-start bg-gray-200 h-12 w-[300px] p-3 items-center rounded-lg shadow-md">
          <img src={email} alt="Email Icon" className="h-[20px] w-[20px]" />
          <input
            type="text"
            className="bg-transparent pl-4 border-none outline-none"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-start bg-gray-200 h-12 w-[300px] p-3 items-center rounded-lg shadow-md">
          <img src={pass} alt="Password Icon" className="h-[20px] w-[20px]" />
          <input
            type="password"
            className="bg-transparent pl-4 border-none outline-none"
            placeholder="Password"
          />
        </div>
        {action === "Login" && (
          <a href="#" className="text-black hover:underline">
            Forgot Password?
          </a>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        {action === "Signup" ? (
          <button
            type="submit"
            className="h-[50px] w-[100px] bg-violet-500  rounded-3xl text-lg shadow-lg text-white"
          >
            Register
          </button>
        ) : (
          <button
            type="submit"
            className="h-[50px] w-[100px] bg-violet-500  rounded-3xl text-lg shadow-lg text-white"
          >
            Login
          </button>
        )}
        
        <button
          type="button"
          className="h-[50px] w-[100px] bg-gray-400 rounded-3xl text-lg shadow-lg text-white"
          onClick={() => setAction(action === "Signup" ? "Login" : "Signup")}
        >
          {action === "Signup" ? "Login" : "Signup"}
        </button>
      </div>
    </div>
  );
};

export default Login;
