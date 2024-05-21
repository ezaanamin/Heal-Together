import React, { useEffect } from 'react';
import { ChatHeader, ContainerChat, StyledHome } from '../../styles/styles';
import { UserContext } from '../../contextState/contextState';
import { useContext } from 'react';
import ChatSideBar from '../../component/ChatSideBar';
import { ProfileImgChatRoom } from '../../styles/styles';
import ProfilePic from "../../images/profile_pic_test.jpg"
import { ChatHeading } from '../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { io } from 'socket.io-client';

const ChatRoom = () => {

  useEffect(()=>{
    const token = localStorage.getItem('Token');
    const socket = io('http://localhost:4000');
    socket.emit("setup",token)



  },[])
    const userContext = useContext(UserContext);

    return (
        <StyledHome theme={userContext.theme}>
<ContainerChat>
<ChatSideBar/>
<ChatHeader theme={userContext.theme}>
     
<ProfileImgChatRoom src={ProfilePic}/>
<ChatHeading>Emily </ChatHeading>

<FontAwesomeIcon 
  style={{position: "absolute", right: 40, top: 45, color: "#005f7f"}} 
  icon={faSearch} 
  size="2x" 
/>    

      </ChatHeader>
</ContainerChat>

      </StyledHome>
    );
}

export default ChatRoom;
