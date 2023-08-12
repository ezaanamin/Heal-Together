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
import Login from '../pages/Login';
import GettingStarted from '../pages/GettingStarted';
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
   <Login/>
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
   <Home/>
        </div>
      ),
    },
    {
      path: "/getting_started",
      element: (
        <div>
   <GettingStarted/>
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
