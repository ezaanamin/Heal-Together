import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Verification from '../pages/verification';
import EmailVerication from '../pages/EmailVerfication';
import Home from '../pages/Home';
  const router = createBrowserRouter([


    {
      path: "/verification",
      element: (
        <div>
 <Verification/>  
        </div>
      ),
    },
    {
      path: "/verfication_email",
      element: (
        <div>
   <EmailVerication/>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
   <Home/>
        </div>
      ),
    },
 
  ]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Routes;
