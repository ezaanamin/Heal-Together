import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import { makeStyles } from "@material-ui/core/styles";
import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import ProfilePic from "../images/profile_pic_default.png"
import styled from 'styled-components';
import MegaDraft from './MegaDraft';
import EmojiPicker from './EmojiPicker';
import AddToPost from './AddToPost';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
function getModalStyle() {


    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor:"white",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: "none",
      color:"black"
      
    }
  }));

  const Profile=styled.img`
  height:50px;
  border-radius:50px;
  margin-top:10px;

  
  `
  const ModalUser=styled.div`
  display:flex;
  flex-direction: row;
  
  `
  const ModalUserHeading=styled.p`
  position: absolute;
  left:90px;
  margin-top:20px;
  font-weight:bold;
  

  
  
  `

  
  function PostModal() {
const dispach=useDispatch();
const state = useSelector((state) => state);
const [modalStyle] = useState(getModalStyle);
const {CreatePost,SetCreatePost}=useContext(UserContext)
    const handleClick = async ()=>
    {
      SetCreatePost(false)
   
    }
    const [textValue, setTextValue] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const textareaRef = useRef(null);
  
    const handleInputChange = (event) => {
      setTextValue(event.target.value);
    };
  
    useEffect(() => {
      if (textValue.length > 50) {
        setFontSize(14); 
      } else {
        setFontSize(16);
      }
    }, [textValue]);
  
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, []);

    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleEmojiSelect = (emoji) => {
      if (emoji && emoji.categories.includes('Smileys & Emotion')) {
        setSelectedEmoji(emoji);
      }
    };

    const CustomModal = () => {
      return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={CreatePost}
          onClose={CreatePost}
        >
         
          <div style={modalStyle} className={classes.paper}>
          <Typography style={{ textAlign: "center",fontSize:25,fontWeight:"bold" }} variant="h4" id="modal-title">
          Create post
          <CloseIcon onClick={()=>handleClick()}   style={{position:"absolute",right:10,top:5,fontSize:35,backgroundColor:"#e4e6eb",color:"#767c84",borderRadius:50}}/>
<hr style={{marginTop:15}}/>
    </Typography>

<ModalUser>
    <Profile src={ProfilePic}/>
<ModalUserHeading>User</ModalUserHeading>

    </ModalUser>
<MegaDraft/>

<AddToPost/>
  
          </div>

        </Modal>
      ) 
    };
  
  
    const classes = useStyles();
  
    return (
  
  
        <CustomModal />
  
    );
  }
  
  export default PostModal;

