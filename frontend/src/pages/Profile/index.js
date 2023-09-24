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
function Profile() {

    const {theme} = useContext(UserContext);
    const [support_group,SetSupportGroup]=useState(0)
    const [mentalHealth,SetMentalHealth]=useState([]);
    const [coping,SetCoping]=useState([]);
    const [UserFirstName,SetUserFirstName]=useState("");
    const [UserSurName,SetUserSurName]=useState("");
    const [userProfilePic,SetUserProfilePic]=useState("");
    const [UserExist,SetUserExist]=useState(false)
    const [UserStory,SetUserStory]=useState("")
    const [coverphoto,SetCoverPhoto]=useState("")

  const LightBackgroundProfile="#ffffff"
    const BlueBackgroundProfile="#6ea8d9";
    const GreenBackgroundProfile="#8fd9a6";
    const PurpleBackgroundProfile="#b39ed9";



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
  const StyledHr = styled.hr`
  border: none;
  height: 3px;
  background-color:#d9d9d9;
  margin:1px
`;

const LightBorder = styled(StyledHr)`
background-color:  #999999 ;
`;

const BlueBorder= styled(StyledHr)`
background-color:#d9d9d9;

`;

const GreenBorder= styled(StyledHr)`
background-color: #c1e8c1;
`;

const PurpleBorder= styled(StyledHr)`
background-color: #e8c1e8 
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
    if (props.theme === 'blue') return '#d9d9d9';
    if (props.theme === 'green') return '#c1e8c1';
    if (props.theme === 'purple') return '#e8c1e8';
    if (props.theme === 'light') return '#999999';
    return '#d9d9d9';
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
    if (props.theme === 'blue') return '#d9d9d9';
    if (props.theme === 'green') return '#c1e8c1';
    if (props.theme === 'purple') return '#e8c1e8';
    if (props.theme === 'light') return '#999999';
    return '#d9d9d9';
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


const GreenTextColor = '#FFFFFF';
const BlueTextColor = '#FFFFFF';
const LightTextColor = '#333333';
const PurpleTextColor = '#333333';
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
    if (props.theme === 'blue') return '#b3c9e8';
    if (props.theme === 'green') return ' #c9e8c1';
    if (props.theme === 'purple') return '#d9c1e8';
    return '#6ea8d9'; 
  }};
  border: 4px solid ${props => {
    if (props.theme === 'blue') return '#4277a8'; 
    if (props.theme === 'green') return '#6bb681';
    if (props.theme === 'purple') return '#906db3'; 
    return '#000'; 
  }};
  color: #333333 ;

  &:hover {
    background-color: ${props => {
      if (props.theme === 'blue') return '#8bb5e8';
      if (props.theme === 'green') return ' #a8e89e';
      if (props.theme === 'purple') return '#c18ae8';
      return '#8bb5e8'; 
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
    if (props.theme === 'blue') return '#4277a8'; 
    if (props.theme === 'green') return '#6bb681'; 
    if (props.theme === 'purple') return '#906db3';
    return '#000';
  }};
  width: 1400px;
  height: 250px;
  position: absolute;
  top: 600px;
  left: 50px;
`;

const [imagePreview, setImagePreview] = useState('http://i.pravatar.cc/500?img=7');

  function readURL(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function handleImageChange(e) {
    readURL(e.target);
  }

  const containerStyle = {
    maxWidth: '960px',
    margin: '30px auto',
    padding: '20px',
    background: 'whitesmoke',
    fontFamily: 'Open Sans, sans-serif',
  };

  const h1Style = {
    fontSize: '20px',
    textAlign: 'center',
    margin: '20px 0 20px',
  };

  const smallStyle = {
    display: 'block',
    fontSize: '15px',
    paddingTop: '8px',
    color: 'gray',
  };

  const avatarUploadStyle = {
    position: 'absolute',
    maxWidth: '205px',
    margin: '50px auto',
    left:50,
    top:250,
    zIndex:1
  };

  const avatarEditStyle = {
    position: 'absolute',
    right: '12px',
    zIndex: '1',
    top: '10px',
  };

  const avatarEditInputStyle = {
    display: 'none',
  };

  const avatarEditLabelStyle = {
    display: 'inline-block',
    width: '34px',
    height: '34px',
    marginBottom: '0',
    borderRadius: '100%',
    background: '#FFFFFF',
    border: '1px solid transparent',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
    cursor: 'pointer',
    fontWeight: 'normal',
    transition: 'all 0.2s ease-in-out',
  };

  const avatarEditLabelHoverStyle = {
    background: '#f1f1f1',
    borderColor: '#d6d6d6',
  };

  const avatarEditLabelAfterStyle = {
    content: '\f040',
    fontFamily: 'FontAwesome',
    color: '#757575',
    position: 'absolute',
    top: '10px',
    left: '0',
    right: '0',
    textAlign: 'center',
    margin: 'auto',
  };

  const avatarPreviewStyle = {
    width: '192px',
    height: '192px',
    position: 'relative',
    
 
    borderRadius: '100%',
    border: '6px solid #F8F8F8',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
  };

  const avatarPreviewDivStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${imagePreview})`,
  };

  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(username, 'ezaan amin');
    const promise = dispatch(GetUsersProfile({ username: username }));

    promise.then((action) => {
      if (GetUsersProfile.fulfilled.match(action)) {

        if(action.payload.status=="Account doesn't exist")
        {
          SetUserExist(true)
        }
        else
        {
          console.log(action.payload.UsersDetail[0],'ezaan amin')
          SetUserFirstName(action.payload.UsersDetail[0]['firstname']);
          console.log(action.payload.UsersDetail[0]['firstname'],'stark')
          SetUserSurName(action.payload.UsersDetail[0]['surname'])
          SetSupportGroup(action.payload.support_group[0])
          SetMentalHealth(action.payload.User_Mental_Health_Insight)
          SetUserProfilePic(action.payload.UsersDetail[0]['user_profile_pic'])
          SetUserStory(action.payload.UsersDetail[0]['myStory'])
          SetCoverPhoto(action.payload.UsersDetail[0]['cover_photo'])
          SetCoping(action.payload.User_Coping)
        }
   
      } else if (GetUsersProfile.rejected.match(action)) {
        alert("Error");
      }
    });
  }, []);

  useEffect(()=>{


    console.log(coping[0],'stark')
  },[UserFirstName,UserSurName])
  return (
<>
{!UserExist?
<>
<SideBar/>
<MainComponent>
 


    <Header>Profile</Header>
    

 
    <MainBorderColor/>
  
{/* <div style={avatarUploadStyle}>
<div style={avatarEditStyle}>
  <input
    type="file"
    id="imageUpload"
    accept=".png, .jpg, .jpeg"
    style={avatarEditInputStyle}
    onChange={handleImageChange}
  />
  <label htmlFor="imageUpload" style={avatarEditLabelStyle}></label>
</div>
<div style={avatarPreviewStyle}>
  <div style={avatarPreviewDivStyle}></div>
</div>
</div> */}
    <CoverPhoto src={`http://localhost:4000/upload/${coverphoto}`}/>
    <ProfilePhoto src={`http://localhost:4000/upload/${userProfilePic}`} theme={theme}/>
    <ButtonLayer>

<Button theme={theme}>Send a Message of Support</Button>
<Button theme={theme}>Connect & Support</Button>

    </ButtonLayer>
<InformationLayer>

<ProfileHeading>{UserFirstName}  {UserSurName}</ProfileHeading>
<ProfileHeading>{support_group} Support group</ProfileHeading>


</InformationLayer>

<MentalHealthGuide  theme={theme}>

<HeadingMentalHealth>Mental Health Insights & Coping Techniques</HeadingMentalHealth>
<div style={{position:"absolute",right:0,top:10}}>


<Button theme={theme}>Comprehensive Mental Health Guide</Button>

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
