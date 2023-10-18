import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CheckIcon from '@mui/icons-material/Check';
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CustomCheckbox from './CustomCheckBox';
import Typography from '@mui/material/Typography';
import { uploadImage } from '../redux/slice/API';
import { EditUserProfile } from '../redux/slice/API';

export default function EditProfile({ cover_photo, profile_pic, First_Name, SurName, story, username }) {
  const dispatch = useDispatch();
  const urlParts = cover_photo.split('/');
  const CoverPhotoName = urlParts[urlParts.length - 1];
  const urlParts1 = profile_pic.split('/');
  const profile_picName = urlParts1[urlParts1.length - 1];
  const { EditProfileModal, SetEditProfileModal, theme } = useContext(UserContext)
  const [CoverPhotoPic, setCoverPhotoPic] = useState(cover_photo);
  const [ProfilePic, SetProfilePic] = useState(profile_pic);
  const [ProfilePicFile, SetProfilePicFile] = useState(null);
  const [CoverProilePicFile, setCoverPhotoPicFile] = useState(null)
  const [LatestCoverProfileFileName, SetCoverProfileFileName] = useState(CoverPhotoName);
  const [LatestProfilePicFileName, SetLatestProfilePicFileName] = useState(profile_picName)
  const [first_name, Setfirstname] = useState(First_Name);
  const [surname, SetSurName] = useState(SurName);
  const [Story, SetStory] = useState(story)
  const [currentWordCount, setCurrentWordCount] = useState(0);


  const LightMainContainer = '#CCCCCC';
  const BlueMainContainer = '#a5c3e0'
  const GreenMainContainer = '#aeddbb'
  const PurpleMainContainer = '#f2e8f5';
  const LightBorder = '#c1b3d9';
  const BlueBorder = '#4277a8';
  const GreenBorder = '#6bb681';
  const PurpleBorder = '#906db3'

  const MainBorderColor =
    theme === 'blue' ? BlueBorder :
      theme === 'green' ? GreenBorder :
        theme === 'purple' ? PurpleBorder :
          theme === 'light' ? LightBorder : LightBorder;
  const maxWords = 200
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      SetStory(inputText);
    }
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 100,
    backgroundColor: theme === 'light' ? '#CCCCCC' :
      theme === 'blue' ? '#a5c3e0' :
        theme === 'green' ? '#aeddbb' :
          theme === 'purple' ? '#f2e8f5' : '#CCCCCC',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme === 'light' ? '#CCCCCC' :
      theme === 'blue' ? '#4277a8' :
        theme === 'green' ? ' #6bb681' :
          theme === 'purple' ? '#c1b3d9' : '#CCCCCC',
    boxShadow: '24px',
    padding: '8px',
  };


  const validationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .required('Password is required'),
  });


  const handleClose = () => {

    SetEditProfileModal(false);
  }

  const Logo = styled.img`
    
    width:100px;
    height:100px;
    display:block;
    margin-right:auto;
    margin-left:auto;
    
   
    `

  const Text = styled.p`
    text-align:center;
    font-size:18px;
    margin-bottom:10px;
    font-weight:bold;
    
    
    
    
    `
  const GreenColor = styled(Text)`

color:#FFFFFF

`
  const BlueColor = styled(Text)`
color:#FFFFFF


`
  const LightColor = styled(Text)`

color:#333333

`
  const PurpleColor = styled(Text)`
color:#333333



`

  const LoginHeading = styled.h1`

text-align: center;

margin-bottom:10px;
font-weight:bold;




`

  const GreenHeading = styled(LoginHeading)`

color:#FFFFFF

`
  const BlueHeading = styled(LoginHeading)`
color:#FFFFFF


`
  const LightHeading = styled(LoginHeading)`

color:#333333

`
  const PurpleHeaing = styled(LoginHeading)`
color:#333333



`

  const MainHeading =

    theme === 'light' ? LightHeading :
      theme === 'blue' ? BlueHeading :
        theme === 'green' ? GreenHeading :
          theme === 'purple' ? PurpleHeaing : LightHeading


  const MainText =
    theme === 'light' ? LightColor :
      theme === 'blue' ? BlueColor :
        theme === 'green' ? GreenColor :
          theme === 'purple' ? PurpleColor : LightColor


  const SaveButton = styled.button`
  height: 40px;
  width: 100px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-weight: bold;
  border-radius: 50px;
  border-color: ${MainBorderColor};
`;

  const BlueButton = styled(SaveButton)`
  background-color: #6ea8d9;
  color: #ffffff; 
`;

  const GreenButton = styled(SaveButton)`
  background-color: #8fd9a6; 
  color: #ffffff; 
`;

  const LightButton = styled(SaveButton)`
  background-color: #ffffff; 
  color: #333333; 
`;

  const PurpleButton = styled(SaveButton)`
  background-color: #b39ed9; 
  color: #333333; 
`;



  const MainButton =
    theme === 'light' ? LightButton :
      theme === 'blue' ? BlueButton :
        theme === 'green' ? GreenButton :
          theme === 'purple' ? PurpleButton : LightButton





  const MainBackGround =
    theme === 'blue' ? BlueMainContainer :
      theme === 'green' ? GreenMainContainer :
        theme === 'purple' ? PurpleMainContainer :
          theme === 'light' ? LightMainContainer : LightMainContainer;


  const CreateAccount = styled.button`
  marginTop: 10px;
  height: 40px;
  width: 200px;
  display: block;
  marginLeft: auto;
  marginRight: auto;
  marginBottom: 10px;
  fontWeight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;


`;

  const LightButtonCreate = styled(CreateAccount)`
background-color:#ffffff;
color: #333333; 

`

  const BlueButtonCreate = styled(CreateAccount)`
  background-color: #8bb5e8;  
  color: #ffffff;
  
`;

  // Serene Green Theme
  const GreenButtonCreate = styled(CreateAccount)`
background-color: #a8e89e;
color: #ffffff; 
`;

  // Relaxing Purple Theme
  const PurpleButtonCreate = styled(CreateAccount)`
 background-color: #c18ae8; 
 color: #333333; 

  
`;
  const MainCreate =
    theme === 'light' ? LightButtonCreate :
      theme === 'blue' ? BlueButtonCreate :
        theme === 'green' ? GreenButtonCreate :
          theme === 'purple' ? PurpleButtonCreate : LightButtonCreate

  const CoverPhoto = styled.img`
  width: 600px;
  height: 150px;
  position: relative;
  left: 0px;
  top: 0;
  transition: opacity 0.3s;
  opacity: 0.2;
  border:0px;
`;


  const EditProfilePhoto = styled.img`
  border-radius: 150px;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 80px;
  top: 250px;
  z-index: 1;

  border: 4px solid ${props => {
      if (props.theme === 'blue') return '#4277a8';
      if (props.theme === 'green') return '#6bb681';
      if (props.theme === 'purple') return '#906db3';
      if (props.theme === 'light') return '#999999';
      return '#4277a8';
    }};

  transform: translate(-50%, -50%);

    opacity: 0.2;

`;

  const NameDiv = styled.div`

position:relative;
left:130px;
margin-bottom:25px;


`
  const StyledTextarea = styled(TextareaAutosize)`
  width: 600px;
  background-color: ${MainBackGround};



  &:focus-visible {
    outline: 0;
  }

`;




  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      // console.log(file.name,'stark')

      reader.onload = (e) => {
        console.log(e.target.result, 'stark')
        setCoverPhotoPic(e.target.result);
        setCoverPhotoPicFile(file)
      };

      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];


    if (file) {
      const reader = new FileReader();
      // console.log(file.name,'stark')

      reader.onload = (e) => {
        console.log(e.target.result, 'stark')
        SetProfilePic(e.target.result);
        SetProfilePicFile(file);

      };


      reader.readAsDataURL(file);
    }
  };

  // useEffect(()=>{

  //   console.log(CoverPhotoPic,'ezaan amin')   // for testing
  // },[CoverPhotoPic])

  const RemoveCoverPhoto = () => {
    setCoverPhotoPic(null)
    setCoverPhotoPicFile(null)


  }

  const handleCoverAndProfilePicUpload = () => {
    if (CoverProilePicFile) {
      console.log(ProfilePicFile, 'ezaan amin')
      const formData = new FormData();
      formData.append('image', CoverProilePicFile);

      // const originalFilename = CoverProilePicFile.name;
      SetCoverProfileFileName(CoverProilePicFile.name)



      dispatch(uploadImage(formData));
    } else {
      console.log('No image file to upload.');
    }


    if (ProfilePicFile) {
      const formData = new FormData();
      formData.append('image', ProfilePicFile);

      SetLatestProfilePicFileName(ProfilePic.name)


      dispatch(uploadImage(formData));
    } else {
      console.log('No image file to upload.');
    }
  }




  useEffect(() => {
    handleCoverAndProfilePicUpload();
  }, [CoverProilePicFile, ProfilePicFile]);


  const HandleChange = () => {

    alert(first_name)

    // Dispatch the action
    dispatch(EditUserProfile({
      username: username,
      firstName: first_name,
      surName: surname,
      userStory: story,
      user_cover_pic: LatestCoverProfileFileName,
      user_profile_pic: LatestProfilePicFileName,
    }));

  }

  useEffect(() => {
    const newWordCount = Story.trim().split(/\s+/).length;
    setCurrentWordCount(newWordCount);
    console.log(currentWordCount, 'ezaan amin')
  }, [Story]);

  return (
    <div>
      <Modal
        open={EditProfileModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Box sx={{ ...style, width: 600, height: 600 }}>

          <Typography sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
            <CloseIcon onClick={() => handleClose()} style={{ marginRight: 25 }} />
            <MainText>Edit Profile</MainText>

            <Typography sx={{ position: "absolute", right: 0, top: -5 }}>
              <MainButton onClick={() => HandleChange()}>Save</MainButton>
            </Typography>

          </Typography>

          <CoverPhoto src={CoverPhotoPic} />
          <input type="file" id="imageInput" style={{ display: 'none' }} accept="image/*" onChange={handleCoverImageChange} />
          <label htmlFor="imageInput">
            <CameraAltIcon fontSize="large" style={{ position: 'relative', bottom: 100, left: 250, cursor: 'pointer' }} />

          </label>
          <CloseIcon onClick={RemoveCoverPhoto} fontSize='large' style={{ position: "relative", bottom: 100, left: 300 }} />
          <EditProfilePhoto theme={theme} src={ProfilePic} />
          <input type="file" id="profile_pic" style={{ display: 'none' }} accept="image/*" onChange={handleProfileImageChange} />
          <label htmlFor="profile_pic">

            <CameraAltIcon
              style={{ position: "relative", top: 70, right: 10 }}
              fontSize="large"

            />
          </label>
          <NameDiv>


            <TextField hiddenLabel
              id="filled-hidden-label-small"
              value={first_name}
              style={{ marginRight: 25 }}
              onChange={(e) => Setfirstname(e.target.value)}
              variant="filled"
              size="small" />

            <TextField hiddenLabel
              id="filled-hidden-label-small"
              value={surname}
              onChange={(e) => SetSurName(e.target.value)}
              variant="filled"
              size="small" />

          </NameDiv>
          <MainText>Story</MainText>
          <div>
            <TextareaAutosize
              style={{
                width: 500,
                backgroundColor: MainBackGround,
                borderColor: MainBorderColor,
                borderWidth: '2px',
                borderStyle: 'solid',
                margin: '0',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              value={Story}
              onChange={handleTextChange}
              maxRows={20}
              placeholder="Enter your story here"
            />

            <p style={{ textAlign: 'right' }}>
              {currentWordCount} / {maxWords}
              {currentWordCount < maxWords ? (
                <CheckIcon style={{ fill: '#333333' }} />
              ) : (
                <CloseIcon style={{ fill: '#FF0000' }} />
              )}
            </p>
          </div>



        </Box>
      </Modal>
    </div>
  );
}