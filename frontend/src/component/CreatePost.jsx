import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState'
import { useState,useRef,useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import MegaDraft from './MegaDraft';
import AddToPost from './AddToPost';
import FemaleAvatar from "../images/user_default_female.png"
import MaleAvatar from "../images/user_default_male.png"
import { getModalStyle,ProfileImg,ModalUser,ModalUserHeading,useStyles } from '../styles/styles';  
  function PostModal() {

const [modalStyle] = useState(getModalStyle);
const userContext = useContext(UserContext);
  const { SetCreatePost } = userContext;





    const handleClick = async ()=>
    {
      SetCreatePost(false)
   
    }
    const [textValue, setTextValue] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const textareaRef = useRef(null);
  
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
    const CustomModal = () => {
      return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={userContext.CreatePost}
          onClose={userContext.CreatePost}
        >
         
          <div style={modalStyle} className={classes.paper}>
          <Typography style={{ textAlign: "center",fontSize:25,fontWeight:"bold" }} variant="h4" id="modal-title">
          Create post
          <CloseIcon onClick={()=>handleClick()}   style={{position:"absolute",right:10,top:5,fontSize:35,backgroundColor:"#e4e6eb",color:"#767c84",borderRadius:50}}/>
<hr style={{marginTop:15}}/>
    </Typography>

<ModalUser>
{
  userContext.UserGender==="Male"?
                  <ProfileImg src={MaleAvatar}/>:
                  <ProfileImg src={FemaleAvatar}/>



          }
<ModalUserHeading>{userContext.UserFirstName}  {userContext.UserSurName}</ModalUserHeading>

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

