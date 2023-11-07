import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import { uploadImage } from '../redux/slice/API';
import { EditUserProfile } from '../redux/slice/API';
import { MainBorderColor,getDynamicStyle,SaveButton,GetMainBackGround,Text,EditCoverPhoto,NameDiv,EditProfilePhoto} from '../styles/styles';
export default function EditProfile({ cover_photo, profile_pic, First_Name, SurName, story, username }) {
  const dispatch = useDispatch();
  const urlParts = cover_photo.split('/');
  const CoverPhotoName = urlParts[urlParts.length - 1];
  const urlParts1 = profile_pic.split('/');
  const profile_picName = urlParts1[urlParts1.length - 1];
  const userContext = useContext(UserContext);
  const { SetEditProfileModal } = userContext;
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
  const MainBorder = MainBorderColor(userContext.theme);
  const maxWords = 200
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      SetStory(inputText);
    }
  };

  const style = getDynamicStyle(userContext.theme);  
  const handleClose = () => {

    SetEditProfileModal(false);
  }
  const MainBackGround=GetMainBackGround(userContext.theme)

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
        open={userContext.EditProfileModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Box sx={{ ...style, width: 600, height: 600 }}>

          <Typography sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
            <CloseIcon onClick={() => handleClose()} style={{ marginRight: 25 }} />
            <Text>Edit Profile</Text>

            <Typography sx={{ position: "absolute", right: 0, top: -5 }}>
              <SaveButton theme={userContext.theme} onClick={() => HandleChange()}>Save</SaveButton>
            </Typography>

          </Typography>

          <EditCoverPhoto src={CoverPhotoPic} />
          <input type="file" id="imageInput" style={{ display: 'none' }} accept="image/*" onChange={handleCoverImageChange} />
          <label htmlFor="imageInput">
            <CameraAltIcon fontSize="large" style={{ position: 'relative', bottom: 100, left: 250, cursor: 'pointer' }} />

          </label>
          <CloseIcon onClick={RemoveCoverPhoto} fontSize='large' style={{ position: "relative", bottom: 100, left: 300 }} />
          <EditProfilePhoto theme={userContext.theme} src={ProfilePic} />
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
          <Text>Story</Text>
          <div>
            <TextareaAutosize
              style={{
                width: 500,
                backgroundColor: MainBackGround,
                borderColor: MainBorder,
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