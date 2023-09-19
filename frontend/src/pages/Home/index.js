import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken, } from 'react-jwt';
import styled from 'styled-components';
import StatusBar from '../../component/StatusBar';
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import PostModal from '../../component/CreatePost';
import SideBar from '../../component/SideBar';
import RecommendedUser from "../../component/RecommendedUser"
const Home = () => {

  const nav = useNavigate();
  const { CreatePost,theme,Login,firstTimeUser,RecommendedUserList } = useContext(UserContext);




  // useEffect(() => {
  //   const token = localStorage.getItem('Token');
  //   if (token) {
  //     const expirationTime = decodeToken(token).exp * 1000;
  //     if (Date.now() > expirationTime) {
  //       localStorage.removeItem('Token');
  //     } else {
  //       const timeoutId = setTimeout(() => {
  //         localStorage.removeItem('Token');
  //         nav('/');
  //       }, expirationTime - Date.now());

  //       return () => clearTimeout(timeoutId);
  //     }
  //   }
  // }, []);



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

// useEffect(()=>{

  
//   const Token = localStorage.getItem('Token');

//   if(!Token)
//   {
//     nav('/')
//   }
  
// console.log(RecommendedUserList,'ezaanamin')
 

// },[Login])


const MainComponent =
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :
  theme === 'light' ? LightMainContainer : LightMainContainer;


  return (
    <>

       <MainComponent>
<SideBar/>
       <div>
  
  
      {firstTimeUser ? 
      <RecommendedUser/>:null
}
     
    </div>
        {CreatePost ? <PostModal/>:null}
        <StatusBar />
        </MainComponent>
    </>
)
};

export default Home;
