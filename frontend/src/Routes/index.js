import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from '../pages/verification';
import EmailVerication from '../pages/EmailVerfication';
import Home from '../pages/Home';
import Login from '../pages/Login';
import GettingStarted from '../pages/GettingStarted';
import Profile from '../pages/Profile';
import ChatRoom from '../pages/ChatRoom';



const router = createBrowserRouter([
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/verfication_email",
    element: <EmailVerication />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/getting_started",
    element: <GettingStarted />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
  {
    path:"/chatroom",
    element:<ChatRoom/>
  }
]);

const Routes = () => {




 

  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
