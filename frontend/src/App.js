import React from 'react';
import './App.css';
import Routes from "./Routes/index"
import { useEffect } from 'react';
 import { UserContext } from './contextState/contextState';
 import { useContext } from 'react';
 
function App() {

  const userContext = useContext(UserContext);
  const { setTheme } = userContext;


  useEffect(()=>{
    const GetTheme = () => {
    
      const theme = localStorage.getItem('theme');
      setTheme(theme)
    };
  
    GetTheme()
  },[])
  




  return (
    <>
    <Routes/>

    </>
  );
}

export default App;
