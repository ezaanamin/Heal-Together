import React from 'react';
import { ChatSideBarDiv, MainHeading,SideBarChat } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
const ChatSideBar = () => {
    const userContext = useContext(UserContext);

    return (
        <ChatSideBarDiv theme={userContext.theme}>

            <SideBarChat>Chat</SideBarChat>
        </ChatSideBarDiv>
            
     
    );
}

export default ChatSideBar;
