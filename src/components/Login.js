import React, { useRef } from "react";
import { Header } from "./Header";
import { useState } from "react";
import { checkValidation } from "../utlis/checkValidation"; // Import the validation function
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { auth } from "../utlis/Firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const handleToggle = () => {
    setSignIn(!signIn);
  };
  const handleButtonClick = () => {
    const checkValue = checkValidation(
      email.current.value,
      password.current.value
    );
    console.log(checkValue);
    setErrorMessage(checkValue);
    console.log("Button clicked1");

    if (checkValue) {
      console.log("Button clicked2");
      return;
    }
    console.log("Button clicked");

    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
            const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          
          setSignIn(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
        alt="background"
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute p-5 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-50 rounded-md p-10 w-full max-w-md mx-auto shadow-lg"
        >
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
          />
          {!signIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-5 mb-4 w-full bg-white"
          />
          <p className="text-red-200">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold rounded-md p-5 mt-5 w-full hover:bg-red-700 transition"
            onClick={handleButtonClick}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-gray-400 text-sm mt-4 text-center cursor-pointer"
            onClick={handleToggle}
          >
            {signIn
              ? "New to Netflix? Sign up now"
              : "Already have an account? Sign in"}
            New to Netflix? Sign up now
          </p>
        </form>
      </div>
    </div>
  );
};
