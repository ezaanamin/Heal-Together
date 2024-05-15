import React from 'react';
import { ChatSideBarDiv } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
const ChatSideBar = () => {
    const userContext = useContext(UserContext);

    return (
        <ChatSideBarDiv theme={userContext.theme}>
            
        </ChatSideBarDiv>
            
     
    );
}

export default ChatSideBar;
