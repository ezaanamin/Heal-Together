import React from 'react';
import './App.css';
import Routes from "./Routes/index"
import { useEffect } from 'react';
import { UserContext } from './contextState/contextState';
import { useContext } from 'react';
import { io } from 'socket.io-client';

function App() {

  const userContext = useContext(UserContext);
  const { setTheme } = userContext;

  const socket = io('http://localhost:4000');

  console.log(socket,'socket')
  

  useEffect(()=>{
    // console.log(`API Key: ${apiUrl}`);
    const GetTheme = () => {
    
      const theme = localStorage.getItem('theme');
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