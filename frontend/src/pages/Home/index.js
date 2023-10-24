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
import  {defaultTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme} from "../../themes/themes"

const Home = () => {

  const nav = useNavigate();
  const { CreatePost,theme,Login,firstTimeUser,RecommendedUserList,SetUserFirstName,SetUserSurName, SetUserGender,UserUsername,SetUserUsername } = useContext(UserContext);




 

  useEffect(() => {
    const userFirstName = localStorage.getItem('UserFirstName');
    const userSurName = localStorage.getItem('UserSurName');
    const userGender = localStorage.getItem('UserGender');
    const userUsername = localStorage.getItem('UserUsername');

    if(userFirstName || userGender || userSurName || userUsername)
    {
      SetUserFirstName(userFirstName);
      SetUserSurName(userSurName);
      SetUserGender(userGender);
      SetUserUsername(userUsername)

    }
  
   
  }, []);


  const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
  `;

  const LightMainContainer = styled(StyledHome)`
   
   background-color:${defaultTheme.palette.primary.main};

`;

const BlueMainContainer = styled(StyledHome)`
  background-color: ${calmingBlueTheme.palette.primary.main};

`;

const GreenMainContainer = styled(StyledHome)`
  background-color: ${sereneGreenTheme.palette.primary.main};
`;

const PurpleMainContainer = styled(StyledHome)`
  background-color: ${relaxingPurpleTheme.palette.primary.main};
`;

useEffect(()=>{

  
  const Token = localStorage.getItem('Token');

  if(!Token)
  {
    nav('/')
  }
  
// console.log(RecommendedUserList,'ezaanamin')
 

},[Login])

// useEffect(()=>{
//   alert(UserUsername)
// },[UserUsername])

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
