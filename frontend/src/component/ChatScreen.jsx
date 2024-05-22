import React from 'react';
import { ChatHeader, ContainerChat, StyledHome,ProfileImgChatRoom,ChatHeading } from "../styles/styles"
import { UserContext } from '../contextState/contextState';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from "../images/profile_pic_test.jpg"
import CloseIcon from '@mui/icons-material/Close';
const ChatScreen = ({username,profilePic}) => {
    const userContext = useContext(UserContext);
    const {SetOpenChat} = userContext;


    return (
        <StyledHome theme={userContext.theme}>
          <ChatHeader theme={userContext.theme}>
<ProfileImgChatRoom  src={`http://localhost:4000/upload/${profilePic}`}/>
<ChatHeading>{username} </ChatHeading>
<div style={{position:"absolute",right:20,top:15,display:"flex",flexDirection:"row"}} >
<FontAwesomeIcon style={{marginRight:20,position:"relative",top:3.5}} icon={faSearch} />
<CloseIcon onClick={()=>SetOpenChat(false)}/>
</div>
</ChatHeader>
</StyledHome>
    );
}

export default ChatScreen;
