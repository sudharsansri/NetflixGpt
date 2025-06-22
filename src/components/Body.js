import React, { use, useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import appStore from "../utlis/appStore";
import { clearUser, setUser } from "../utlis/userSlice";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Body = () => {
    const dispatch =useDispatch();
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(setUser({uid: uid, email: email, displayName: displayName}));
      
       
      } else {
        dispatch(clearUser(null));
        
      }
    });
  }, []);
  return (
    <>
      
        <RouterProvider router={appRouter} />
    
    </>
  );
};
