import React, { use, useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {  useDispatch } from "react-redux";


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
  
  return (
    <>
      
        <RouterProvider router={appRouter} />
    
    </>
  );
};
