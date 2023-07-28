import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, decodeToken, isTokenExpired } from 'react-jwt';
import Navbar from '../../component/SideBar';
import styled from 'styled-components';
import StatusBar from '../../component/StatusBar';
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import PostModal from '../../component/CreatePost';
import { ThemeContext } from "../../Context/theme-context"
import { themes } from '../../Context/theme-context';
import SideBar from '../../component/SideBar';
const Home = () => {

  const nav = useNavigate();
  const { CreatePost, SetCreatePost,theme, setTheme } = useContext(UserContext);




  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      const expirationTime = decodeToken(token).exp * 1000;
      if (Date.now() > expirationTime) {
        localStorage.removeItem('Token');
      } else {
        const timeoutId = setTimeout(() => {
          localStorage.removeItem('Token');
          nav('/');
        }, expirationTime - Date.now());

        return () => clearTimeout(timeoutId);
      }
    }
  }, []);

  const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
  `;

  const LightMainContainer = styled(StyledHome)`
  background-color: #f0f2f5;
`;

const BlueMainContainer = styled(StyledHome)`
  background-color: #6ea8d9;
`;

const GreenMainContainer = styled(StyledHome)`
  background-color: #8fd9a6;
`;

const PurpleMainContainer = styled(StyledHome)`
  background-color: #b39ed9;
`;



const MainComponent =
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :
  theme === 'light' ? LightMainContainer : LightMainContainer;


  return (
    <>

       <MainComponent>
       <SideBar/>

        {CreatePost ? <PostModal/>:null}
        <StatusBar />
        </MainComponent>
    </>
)
};

export default Home;
