import React, { useEffect, useState } from 'react';
import { ChatSideBarDiv, MainHeading,SideBarChat,ChatBox,ChatContainer } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import { UserFriends } from '../redux/slice/API';
import { useDispatch } from 'react-redux';
const ChatSideBar = () => {
    const userContext = useContext(UserContext);
    const [ChatClicked,SetChatClicked]=useState(false);
    const [chatFriends, setChatFriends] = useState({});

    const HandleClick=()=>{
        SetChatClicked(!ChatClicked);

    }

    const dispatch=useDispatch()
    useEffect(() => {
        const fetchUserFriends = async () => {
          const token = localStorage.getItem("Token");
          if (token) {
            const action=await dispatch(UserFriends({ token }));

            if(action.payload)
                {
                    console.log(action.payload.support_group,'action')
                    await setChatFriends(action.payload.support_group);
                       
                }

          }
        };
    
        fetchUserFriends();
      }, []);

      useEffect(()=>{

        console.log(chatFriends,'friends')

      },[chatFriends])

    return (
        <ChatSideBarDiv theme={userContext.theme}>

            <SideBarChat>Chat</SideBarChat>
            {Object.keys(chatFriends).map(key => (
        <div key={key}>
      <ChatBox isClicked={ChatClicked}  onClick={HandleClick} theme={userContext.theme}>
        <img src={`http://localhost:4000/upload/${chatFriends[key].profile_pic}`}/>
      <h2 style={{textAlign:"center",marginTop:10}}> {chatFriends[key].username}</h2>
</ChatBox>
      
    
        </div>
      ))}


        </ChatSideBarDiv>
            
     
    );
}

export default ChatSideBar;
