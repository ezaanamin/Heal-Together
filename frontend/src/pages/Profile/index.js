import React, { useEffect } from 'react'
import SideBar from '../../component/SideBar'
import styled from 'styled-components'
import { useContext } from 'react';
import { UserContext } from '../../Context/context';
import Cover from "../../images/cover_photo.jpg"
import Pic from "../../images/profile.jpg"
import ProfileCompoents from '../../component/Comments';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useState } from 'react';
import {useParams} from "react-router-dom";
import {useDispatch } from 'react-redux';
import { GetUsersProfile } from '../../redux/slice/API';
import { VerifyUser } from '../../redux/slice/API';
import Comprehensive_Mental_Health_Guide_Model from '../../component/Comprehensive Mental Health Guide Model';
import EditProfile from "../../component/EditProfile"
import  {defaultTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme} from "../../themes/themes"


function Profile() {
    const {theme, UserProfileModal,SetUserProfileModal,  EditProfileModal,SetEditProfileModal,} = useContext(UserContext);
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
    const [UserLogin,SetUserLogin]=useState(false)

    const LightBackgroundProfile=defaultTheme.palette.primary.main
    const BlueBackgroundProfile=calmingBlueTheme.palette.primary.main
    const GreenBackgroundProfile=sereneGreenTheme.palette.primary.main
    const PurpleBackgroundProfile=relaxingPurpleTheme.palette.primary.main



   const LightBackgroundProfileCover="#f9f9f9"
    const BlueBackgroundProfileCover="#c2d9f2";
    const GreenBackgroundProfileCover="#d8f2d2";
    const PurpleBackgroundProfileCover="#e2d2f2";


    const MainBackgroundProfile =
    theme === 'light' ? LightBackgroundProfile:
    theme === 'blue' ? BlueBackgroundProfile :
    theme === 'green' ? GreenBackgroundProfile :
    theme === 'purple' ? PurpleBackgroundProfile :LightBackgroundProfile 




    const MainBackgroundProfileCover  =
    theme === 'light' ? LightBackgroundProfileCover:
    theme === 'blue' ? BlueBackgroundProfileCover :
    theme === 'green' ? GreenBackgroundProfileCover :
    theme === 'purple' ? PurpleBackgroundProfileCover :LightBackgroundProfileCover 


   
    const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    left: 400px;

  `;
  const LightMainContainer = styled(StyledHome)`
     background-color:${defaultTheme.palette.secondary.main};

`;

const BlueMainContainer = styled(StyledHome)`
   background-color:${calmingBlueTheme.palette.secondary.main};

`;

const GreenMainContainer = styled(StyledHome)`
     background-color:${sereneGreenTheme.palette.secondary.main};

`;

const PurpleMainContainer = styled(StyledHome)`
    background-color:${relaxingPurpleTheme.palette.secondary.main};

`;
const MainComponent =
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :
  theme === 'light' ? LightMainContainer : LightMainContainer;
  const StyledHr = styled.hr`
  border: none;
  height: 3px;
  margin:1px
`;

const LightBorder = styled(StyledHr)`
background-color:${defaultTheme.palette.borderLine.backgroundColor}
`;

const BlueBorder= styled(StyledHr)`
background-color:${calmingBlueTheme.palette.borderLine.backgroundColor}

`;

const GreenBorder= styled(StyledHr)`
background-color:${sereneGreenTheme.palette.borderLine.backgroundColor}
`;

const PurpleBorder= styled(StyledHr)`
background-color:${relaxingPurpleTheme.palette.borderLine.backgroundColor}
`;

const MainBorderColor=
theme === 'blue' ? BlueBorder :
theme === 'green' ? GreenBorder :
theme === 'purple' ? PurpleBorder :
theme === 'light' ? LightBorder : LightBorder;
const CoverPhoto = styled.img`
  width: 80%;
  height: 30%;
  position: relative;
  left: 0px;
  top: 0;
`;

const NoCoverPhoto=styled.div`

width: 80%;
height: 30%;
position: relative;
left: 0px;
top: 0;
background-color: ${MainBackgroundProfileCover};


`

const ProfilePhoto = styled.img`
  border-radius: 150px;
  height: 200px;
  width: 200px;
  position: absolute;
  left: 150px;
  top: 400px;
  z-index: 1;

  border: 4px solid ${props => {
    if (props.theme === 'blue') return `${calmingBlueTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'green') return `${sereneGreenTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'light') return `${defaultTheme.palette.borderLine.backgroundColor}`;
    return `${defaultTheme.palette.borderLine.backgroundColor}`;
  }};

  transform: translate(-50%, -50%);
`;

const NoAccountProfilePhoto = styled.div`
  border-radius: 150px;
  height: 200px;
  width: 200px;
  position: absolute;
  left: 150px;
  top: 400px;
  z-index: 1;
  background-color:${MainBackgroundProfile};;
  border: 4px solid ${props => {
    if (props.theme === 'blue') return `${calmingBlueTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'green') return `${sereneGreenTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'light') return `${defaultTheme.palette.borderLine.backgroundColor}`;
    return `${defaultTheme.palette.borderLine.backgroundColor}`;
  }};

  transform: translate(-50%, -50%);
`;


const InformationLayer=styled.div`
position: absolute;
left: 20px;
top: 500px;
display:flex;
flex-direction:column;


`


const GreenTextColor = sereneGreenTheme.palette.text.primary
const BlueTextColor = calmingBlueTheme.palette.text.primary
const LightTextColor = defaultTheme.palette.text.primary
const PurpleTextColor = relaxingPurpleTheme.palette.text.primary
const MentalHealthInsights=styled.div`
 display:flex;
 flex-direction:row;
 position: relative;
 top:50px;
 left:300px;


`
const CopingTechniques=styled.div`

display:flex;
flex-direction:row;
position: relative;
top:100px;
left:300px;


`
const ButtonLayer=styled.div`

position: absolute;
top: 400px;
right:400px;
display:flex;
flex-direction:row;

`
const Button = styled.button`
width:300px;
height:50px;
border-radius: 150px;
margin-right:25px;
text-transform: capitalize;


  background-color: ${props => {
    if (props.theme === 'blue') return `${calmingBlueTheme.palette.secondary.main}`
    if (props.theme === 'green') return `${sereneGreenTheme.palette.secondary.main}`
    if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.secondary.main}`
    return `${defaultTheme.palette.secondary.main}`
  }};
  border: 4px solid ${props => {
  if (props.theme === 'blue') return calmingBlueTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'green') return sereneGreenTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'purple') return relaxingPurpleTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'light') return defaultTheme.palette.borderLine.backgroundColor;
  return defaultTheme.palette.borderLine.backgroundColor;
}};
color: ${defaultTheme.palette.text.primary};

  &:hover {
    background-color: ${props => {
      if (props.theme === 'blue') return `${calmingBlueTheme.palette.action.hover}`
      if (props.theme === 'green') return `${sereneGreenTheme.palette.action.hover}`
      if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.action.hover}`
      return `${defaultTheme.palette.action.hover}`
    }};


  }
`;


  const ProfileText =
  theme === 'light' ? LightTextColor:
  theme === 'blue' ? BlueTextColor :
  theme === 'green' ? GreenTextColor :
  theme === 'purple' ? PurpleTextColor :LightTextColor 



  const ProfileHeading = styled.h2`
  margin-bottom: 5px 0;
  margin-left: 60px;
  margin-top: 10px;
  color: ${ProfileText};
`;

const Header=styled.h2`
margin-bottom:5px 0;
margin-left:60px;
margin-top:50px;
color: ${ProfileText};


`

const AccountDoesnotExist=styled.h1`

color: ${ProfileText};


`
const SearchAccount=styled.p`
color: ${ProfileText};

`
const MentalHealthInsightsHeading=styled.h2`

color: ${ProfileText};
margin-right:30px;


`
const HeadingMentalHealth = styled.h2`
  color: ${ProfileText};
  text-align: center;
  position: relative;
  top: 10px;
`;

const MyStorySection=styled.div`
position: absolute;
top: 900px;
left: 50px;

`
const MyStory=styled.h2`
color: ${ProfileText};
text-align:center;


`
const MyStoryText=styled.p`
width:1200px;
text-align:center;
font-size:16px;



`
const WellnessUpdatesSection = styled.div`
  position: absolute;
  top: 1100px;
  left: 100px;
  display: flex;
  justify-content: center; 
  align-items: center; 


`;
const WellnessUpdatesHeading=styled.div`
position: absolute;

top: 1060px;
left: 50px;


`

const WellnessUpdates=styled.h2`
color: ${ProfileText};
position: relative;


`

const  WellnessUpdatesComments=styled.div`
position: relative;

`

  const MentalHealthGuide = styled.div`
  border: 4px solid ${props => {
    if (props.theme === 'blue') return `${calmingBlueTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'green') return `${sereneGreenTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.borderLine.backgroundColor}`;
    if (props.theme === 'light') return `${defaultTheme.palette.borderLine.backgroundColor}`;
    return `${defaultTheme.palette.borderLine.backgroundColor}`;
  }};
  width: 1400px;
  height: 250px;
  position: absolute;
  top: 600px;
  left: 50px;
`;


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
          console.log(action.payload.UsersDetail[0]['user_cover_pic'],'TONY STARK')
          // console.log(action.payload.UsersDetail[0],'stark')
          console.log(action.payload.UsersDetail[0],'ezaan amin')
          SetUserFirstName(action.payload.UsersDetail[0]['firstname']);
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
  const token = localStorage.getItem('Token');
  if(token)
  { //VerifyUser
    const promise = dispatch(VerifyUser({ token: token,username:username }));
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
  return (
<>
{!UserExist?
<>
<SideBar/>
<MainComponent>
 {UserProfileModal?
 <Comprehensive_Mental_Health_Guide_Model firstName={UserFirstName} Surname={UserSurName} UserProfileInformation={UserProfile} username={username} mental_health={mentalHealth} coping={coping}/>
:null

 }
 {
  EditProfileModal?
  <EditProfile username={username} story={UserStory} First_Name={UserFirstName} SurName={UserSurName} cover_photo ={`http://localhost:4000/upload/${coverphoto}`} profile_pic={`http://localhost:4000/upload/${userProfilePic}`}/>:
  null
 }
    <Header>Profile</Header>
    <MainBorderColor/>
  <CoverPhoto src={`http://localhost:4000/upload/${coverphoto}`}/>
    <ProfilePhoto src={`http://localhost:4000/upload/${userProfilePic}`} theme={theme}/>
    <ButtonLayer>
{UserLogin?
  <Button onClick={()=>SetEditProfileModal(true)} theme={theme}>Edit Profile</Button>:
  <>
  <Button theme={theme}>Send a Message of Support</Button>
<Button theme={theme}>Connect & Support</Button>
  </>
}
    </ButtonLayer>
<InformationLayer>
<ProfileHeading>{UserFirstName}  {UserSurName}</ProfileHeading>
<ProfileHeading>{support_group} Support group</ProfileHeading>
</InformationLayer>
<MentalHealthGuide  theme={theme}>
<HeadingMentalHealth>Mental Health Insights & Coping Techniques</HeadingMentalHealth>
<div style={{position:"absolute",right:0,top:10}}>
<Button onClick={()=>SetUserProfileModal(true)} theme={theme}>Comprehensive Mental Health Guide</Button>
</div>
<MentalHealthInsights>
<MentalHealthInsightsHeading>Mental Health Insights</MentalHealthInsightsHeading>
<div style={{position:"relative",left:30}}>
{Array.from({ length: 2 }).map((_, index) => (
<>
<Button theme={theme}>{mentalHealth[index]}</Button>
</>
))}
{/* <Button theme={theme}>Depression</Button>
<Button theme={theme}>Anxiety</Button> */}
</div>
</MentalHealthInsights>
<CopingTechniques>
<MentalHealthInsightsHeading>Coping Techniques</MentalHealthInsightsHeading>
<div style={{position:"relative",left:70}}>
{Array.from({ length: 2 }).map((_, index) => (
<>
<Button theme={theme}>{coping[index]}</Button>

</>

))}
</div>
</CopingTechniques>
</MentalHealthGuide>
<MyStorySection>
<MyStory>My Story</MyStory>
<MyStoryText>{UserStory}</MyStoryText>
</MyStorySection>
<WellnessUpdatesHeading>
<WellnessUpdates>Wellness Updates</WellnessUpdates>
</WellnessUpdatesHeading>
<WellnessUpdatesSection>
<WellnessUpdatesComments>
<ProfileCompoents/>
<ProfileCompoents/>
<ProfileCompoents/>
</WellnessUpdatesComments>
</WellnessUpdatesSection>
</MainComponent>
</>
:
<>
<SideBar/>
<MainComponent>
<Header>Profile</Header>
<NoCoverPhoto/>
    <NoAccountProfilePhoto theme={theme}/>
    <MainBorderColor/>
  <InformationLayer>
<ProfileHeading>{username} </ProfileHeading>
<AccountDoesnotExist>This account doesn't exist </AccountDoesnotExist>
<SearchAccount>Try searching for another.</SearchAccount>
</InformationLayer>
</MainComponent>
</>
}
    

   


        </>
  )
}

export default Profile
