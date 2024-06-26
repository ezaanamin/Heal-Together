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
import { GetUsersMindFulDetails } from '../../redux/slice/API';
import { useDispatch } from 'react-redux';
import Post from '../../component/Post';
import HandIcon from '../../SVG ANIMATION/HandIcon';
const Home = () => {

   const nav = useNavigate();
   const dispatch = useDispatch();

  const userContext = useContext(UserContext);
  const { SetUserFirstName,SetUserSurName, SetUserProfilePic,SetUserUsername,PostContent,SetPostContent } = userContext;

  useEffect(() => {
    const userFirstName = sessionStorage.getItem('UserFirstName');
    const userSurName = sessionStorage.getItem('UserSurName');
    const profile_pic = sessionStorage.getItem('profile_pic');
    const userUsername = sessionStorage.getItem('UserUsername');
    const Token = sessionStorage.getItem('Token');

    if (userFirstName || profile_pic || userSurName || userUsername) {
      const fetchData = async () => {
        try {
          const action = await dispatch(GetUsersMindFulDetails(Token));

          if (GetUsersMindFulDetails.fulfilled.match(action)) {


            console.log(action.payload,'post')
          }
            SetPostContent(action.payload)
          //   console.log(action.payload[0],'ezaan amin');
          //   if (action.payload[0] && action.payload[0].Likes) {
          //     console.log('Likes:', action.payload[0].Likes);
          //   } else {
          //     console.log('Likes array not found in the payload');
          //   }
          // }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchData();

      SetUserFirstName(userFirstName);
      SetUserSurName(userSurName);
      SetUserProfilePic(profile_pic);
      SetUserUsername(userUsername);
    }
  }, []); 
useEffect(()=>{

  
  const Token = sessionStorage.getItem('Token');

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
        <SideBar />
        <div>
          {userContext.firstTimeUser ? <RecommendedUser /> : null}
        </div>
        {userContext.CreatePost ? <PostModal /> : null}
        <StatusBar />
        {PostContent.map((postData, index) => (
  <div key={index}>
    <Post
    username={postData.username}
      isFirst={index === 0}
      PostText={postData.MindfulMoments}
      Date={postData.Date}
      Likes={postData.support}
      profile_pic={postData.profile_pic}
      support={postData.Support}
      Comments={postData.NumberOfComments}
    />

  
  </div>
))}  

      </StyledHome> 

    
    </>
)
};

export default Home;
