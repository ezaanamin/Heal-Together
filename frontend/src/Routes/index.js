import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from '../pages/verification';
import EmailVerication from '../pages/EmailVerfication';
import Home from '../pages/Home';
import Login from '../pages/Login';
import GettingStarted from '../pages/GettingStarted';
import Profile from '../pages/Profile';
import io from 'socket.io-client';
const socket = io.connect(process.env.REACT_APP_BACKEND_PORT);



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
  }
]);

const Routes = () => {
  useEffect(()=>{
    // console.log(process.env.REACT_APP_BACKEND_PORT,'backend')

    socket.on('comments', data => {
  
  
  console.log(data,'comment ')
    // const filtered = data.filter(item => item.status.includes("Pending"));
    // SetOrdersData(filtered)
  
   
  
  });
  
  
  },[socket])

  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
