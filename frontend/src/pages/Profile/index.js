import React, { useEffect } from 'react'
import SideBar from '../../component/SideBar'
import { useContext } from 'react';
import { UserContext } from "../../contextState/contextState"
import { useState } from 'react';
import {useParams} from "react-router-dom";
import {useDispatch } from 'react-redux';
import { GetUsersProfile } from '../../redux/slice/API';
import { VerifyUser } from '../../redux/slice/API';
import Comprehensive_Mental_Health_Guide_Model from '../../component/Comprehensive Mental Health Guide Model';
import EditProfile from "../../component/EditProfile"
import { UserFriends } from '../../redux/slice/API';
import UserFriendModal from '../../component/UserFriendModal';
import { StyledProfileHome,StyledHr,NoCoverPhoto,CoverPhoto,ProfilePhoto,NoAccountProfilePhoto,InformationLayer,
  ButtonLayer,ButtonModal,ProfileHeading,Header,AccountDoesnotExist,SearchAccount,MyStorySection,
  MyStory,MyStoryText,WellnessUpdatesSection,WellnessUpdatesHeading,WellnessUpdates,WellnessUpdatesComments} from '../../styles/styles';
  import Post from '../../component/Post';
function Profile() {

    const userContext = useContext(UserContext);
    const {SetUserProfileModal,SetEditProfileModal,setSupportGroupData,SetUserFriendModal,PostContent} = userContext;
    const [support_group,SetSupportGroup]=useState(0)
    const [mentalHealth,SetMentalHealth]=useState([]);
    const [coping,SetCoping]=useState([]);
    const [UserFirstName,SetUserFirstName]=useState("");
    const [UserSurName,SetUserSurName]=useState("");
    const [userProfilePic,SetUserProfilePic]=useState("");
    const [UserExist,SetUserExist]=useState(false)
    const [UserStory,SetUserStory]=useState("")
    const [coverphoto,SetCoverPhoto]=useState("");
    const[UserProfile,SetUserProfile]=useState([]);
    const [UserLogin,SetUserLogin]=useState(false);
    const [Mindful_Moments,SetMindFulMoment]=useState([])
    const [StoryLength,SetStoryLength]=useState(0)

   
  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(username, 'ezaan amin');
    const promise = dispatch(GetUsersProfile({ username: username }));

    promise.then((action) => {
      if (GetUsersProfile.fulfilled.match(action)) {

        if(action.payload.status==="Account doesn't exist")
        {
          SetUserExist(true)
        }
        else
        {
          console.log(action.payload,'testing data ')
          // console.log(action.payload.UsersDetail[0]['user_cover_pic'],'TONY STARK')
          //  console.log(action.payload.UsersDetail[0],'stark')

          SetMindFulMoment(action.payload.Mindful_Moments)
          console.log(action.payload.UsersDetail[0],'ezaan amin')
          SetUserFirstName(action.payload.UsersDetail[0]['firstname']);
          SetStoryLength(action.payload.UsersDetail[0]['StoryWord'])
          console.log(action.payload.UsersDetail[0]['firstname'],'stark')
          SetUserSurName(action.payload.UsersDetail[0]['surname'])
          SetSupportGroup(action.payload.SupportGroup[0])
          SetMentalHealth(action.payload.UserMentalHealthInsight)
          SetUserProfilePic(action.payload.UsersDetail[0]['user_profile_pic'])
          SetUserStory(action.payload.UsersDetail[0]['userStory'])
          SetCoverPhoto(action.payload.UsersDetail[0]['user_cover_pic'])
          SetCoping(action.payload.UserCoping)
          SetUserProfile(action.payload.userProfile)
        }
      } else if (GetUsersProfile.rejected.match(action)) {
        alert("Error");
      }
    });
  }, []);
useEffect(()=>{
  const token = sessionStorage.getItem('Token');
  if(token)
  { //VerifyUser
    const promise = dispatch(VerifyUser({ token: token }));
    promise.then((action) => {
      if (VerifyUser.fulfilled.match(action)) {

        if(action.payload.status==="Login")
        {
          SetUserLogin(true)
        }
        if(action.payload.status==="Unauthorized")
        {
          SetUserLogin(false)

        }
      }
    })
  }
  else
  {
    SetUserLogin(false)
  }
},[])

const UserFriendsList = async () => {
  try {
    const action = await dispatch(UserFriends({ username }));
    if (UserFriends.fulfilled.match(action)) {
     
      const data = action.payload; 
      setSupportGroupData(data.support_group);
      SetUserFriendModal(true)

    } else {
    }
  } catch (error) {
    console.error('Error fetching user friends:', error);
 
  }
};


// useEffect(()=>{

//   console.log(supportGroupData)

// },[supportGroupData])
  return (
<>
<UserFriendModal support_group={userContext.supportGroupData}/>
{!UserExist?
<>
<SideBar/>

<StyledProfileHome theme={userContext.theme}>
 {userContext.UserProfileModal?
 <Comprehensive_Mental_Health_Guide_Model firstName={UserFirstName} Surname={UserSurName} UserProfileInformation={UserProfile} username={username} mental_health={mentalHealth} coping={coping}/>
:null

 }
 {
  userContext.EditProfileModal?
  <EditProfile StoryWord={StoryLength} username={username} story={UserStory} First_Name={UserFirstName} SurName={UserSurName} cover_photo ={`http://localhost:4000/upload/${coverphoto}`} profile_pic={`http://localhost:4000/upload/${userProfilePic}`}/>:
  null
 }
    <Header>Profile</Header>
    <StyledHr theme={userContext.theme}/>
  <CoverPhoto src={`http://localhost:4000/upload/${coverphoto}`}/>
    <ProfilePhoto src={`http://localhost:4000/upload/${userProfilePic}`} theme={userContext.theme}/>
    <ButtonLayer>
{UserLogin?
  <ButtonModal onClick={()=>SetEditProfileModal(true)} theme={userContext.theme}>Edit Profile</ButtonModal>:
  <>
  <ButtonModal theme={userContext.theme}>Send a Message of Support</ButtonModal>
<ButtonModal theme={userContext.theme}>Connect & Support</ButtonModal>
  </>
}
    </ButtonLayer>
<InformationLayer>
<ProfileHeading>{UserFirstName}  {UserSurName}</ProfileHeading>
<ProfileHeading onClick={()=>UserFriendsList()}>{support_group} Support group</ProfileHeading>
</InformationLayer>
{UserLogin?
<div style={{position:"relative",left:790,top:10}}>
<ButtonModal onClick={()=>SetUserProfileModal(true)} theme={userContext.theme}>Comprehensive Mental Health Guide</ButtonModal>
</div>
:
<div style={{position:"relative",left:500,top:10}}>
<ButtonModal onClick={()=>SetUserProfileModal(true)} theme={userContext.theme}>Comprehensive Mental Health Guide</ButtonModal>
</div>
}


<MyStorySection>
<MyStory>My Story</MyStory>
<MyStoryText>{UserStory}</MyStoryText>
</MyStorySection>
<WellnessUpdatesHeading>
<WellnessUpdates>Wellness Updates</WellnessUpdates>
</WellnessUpdatesHeading>
<WellnessUpdatesSection>
 <WellnessUpdatesComments>
 

  {/* {PostContent.map((postData, index) => (
    <div key={index}>
      <Post
        isFirst={false}
        PostText={postData.MindfulMoments}
        Date={postData.Date}
        Likes={postData.Likes}
        Comments={postData.Comments}
      />
    </div>
  ))} */}


</WellnessUpdatesComments> 
</WellnessUpdatesSection>
</StyledProfileHome>
</>
:
<>
<SideBar/>
<StyledProfileHome>
<Header>Profile</Header>
<NoCoverPhoto/>
    <NoAccountProfilePhoto theme={userContext.theme}/>
    <StyledHr theme={userContext.theme}/>
  <InformationLayer>
<ProfileHeading>{username} </ProfileHeading>
<AccountDoesnotExist>This account doesn't exist </AccountDoesnotExist>
<SearchAccount>Try searching for another.</SearchAccount>
</InformationLayer>
</StyledProfileHome>
</>
}
    
        </>
  )
}

export default Profile
