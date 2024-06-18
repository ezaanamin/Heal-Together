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
import ChatScreen from '../../component/ChatScreen';

const ChatRoom = () => {


    const userContext = useContext(UserContext);
    const {openChat,currentChatName,ChatProfilePic} = userContext;


    return (
        <StyledHome  theme={userContext.theme}>
<ContainerChat>

<ChatSideBar />

{
  openChat?
  <ChatScreen username={currentChatName} profilePic={ChatProfilePic}/>
:null
}

   
     
</ContainerChat>



      </StyledHome>
    );
}

export default ChatRoom;
