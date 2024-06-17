import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes/index"
import { useEffect } from 'react';
import { UserContext } from './contextState/contextState';
import { useContext } from 'react';
import { io } from 'socket.io-client';


function App() {

  const userContext = useContext(UserContext);
  const { setTheme } = userContext;
  const [token, setToken] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('Token');
    console.log(token, 'token');
    setToken(token);  
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     const newSocket = io('http://localhost:4000', {
  //       query: { token }
  //     });
  //     setSocket(newSocket);


  //     return () => newSocket.close();
  //   }
  // }, [token]); 




  

  useEffect(()=>{
    // console.log(`API Key: ${apiUrl}`);
    const GetTheme = () => {
    
      const theme = sessionStorage.getItem('theme');
      setTheme(theme)
    };
  
    GetTheme()
  },[setTheme])
  




  return (
    <>
    <Routes/>

    </>
  );
}

export default App;