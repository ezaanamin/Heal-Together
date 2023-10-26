import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../../component/StatusBar';
import { UserContext } from "../../contextState/contextState"
import { useContext } from 'react';
import PostModal from '../../component/CreatePost';
import SideBar from '../../component/SideBar';
import RecommendedUser from "../../component/RecommendedUser"
import { StyledHome } from '../../styles/styles';

const Home = () => {

   const nav = useNavigate();
  const userContext = useContext(UserContext);
  const { SetUserFirstName,SetUserSurName, SetUserGender,SetUserUsername } = userContext;

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
useEffect(()=>{

  
  const Token = localStorage.getItem('Token');

  if(!Token)
  {
    nav('/')
  }
  
// console.log(RecommendedUserList,'ezaanamin')
 

},[userContext.Login])

// useEffect(()=>{
//   alert(userContext.UserUsername)
// },[userContext.UserUsername])

  return (
    <>

       <StyledHome theme={userContext.theme}>
<SideBar/>
       <div>
  
  
      {userContext.firstTimeUser ? 
      <RecommendedUser/>:null
}
     
    </div>
        {userContext.CreatePost ? <PostModal/>:null}
        <StatusBar />
        </StyledHome>
    </>
)
};

export default Home;
