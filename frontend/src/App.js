import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import { UserContext } from './Context/context';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { CssBaseline,ThemeProvider } from '@mui/material';



function App() {

useEffect(()=>{
  const GetTheme = () => {
  
    const theme = localStorage.getItem('theme');
    setTheme(theme)
  };

  GetTheme()
},[])
  const [SignUpModal, SetSignUpModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dateError, setDateError] = useState(false);
  const [Code, SetCode] = useState(0);
  const [verficationEmail, setverficationEmail] = useState('');
  const [verficationFirstName, setverficationFirstName] = useState('');
  const [verficationLastName, setverficationLastName] = useState('');
  const [ExpireTime, setExpireTime] = useState(0);
  const [CreatePost, SetCreatePost] = useState(false);
  const [currentTheme,SetCurrentTheme] = useState("");
  const [LoginModal, SetLoginModal] = useState(false);


  const [theme, setTheme] = useState("light");
  const[ColorTheme, SetColorTheme] = useState(false);

  const userContextValue = {
    SignUpModal,
    SetSignUpModal,
    date,
    setDate,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    dateError,
    setDateError,
    Code,
    SetCode,
    verficationEmail,
    setverficationEmail,
    ExpireTime,
    setExpireTime,
    verficationFirstName,
    setverficationFirstName,
    verficationLastName,
    setverficationLastName,
    CreatePost,
    SetCreatePost,
    theme, setTheme,
    ColorTheme, SetColorTheme,
    currentTheme,SetCurrentTheme,
    LoginModal, SetLoginModal
  };


  return (
    <UserContext.Provider value={userContextValue}>


<Routes/>


    </UserContext.Provider>
  );
}

export default App;
