import React from 'react';
import { Header } from './Header';
import { useState } from 'react';

export const Login = () => {
    const [signIn ,setSignIn] = useState(true);
    const handleToggle = () => {
    setSignIn(!signIn);
    }
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
        alt="background"
        className="absolute h-full w-full object-cover"
      />

      
      <div className="absolute p-5 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <form className="bg-black bg-opacity-50 rounded-md p-10 w-full max-w-md mx-auto shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">{signIn ? "Sign In" : "Sign Up"}</h2>

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
          />
         {!signIn && <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
          />}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
          />
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold rounded-md p-5 mt-5 w-full hover:bg-red-700 transition"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center cursor-pointer" onClick={handleToggle}>
           {signIn ? "New to Netflix? Sign up now" : "Already have an account? Sign in" }
            New to Netflix?{' '}
              Sign up now
            </p>
        </form>
      </div>
    </div>
  );
};
