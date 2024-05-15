import React from 'react';
import { ChatHeader } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import { Profile } from '../styles/styles';
import ProfilePic from "../images/profile_pic_test.jpg"
const ChatHeader = () => {
    const userContext = useContext(UserContext);
    return (
      <ChatHeader theme={userContext.theme}>

<h1></h1>
      </ChatHeader>
    );
}

export default ChatHeader;
