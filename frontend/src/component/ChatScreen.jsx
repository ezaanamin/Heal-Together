import React, { useEffect,useState,useContext } from 'react';
import { ChatHeader, ContainerChat, StyledHome, ProfileImgChatRoom, ChatHeading } from "../styles/styles"
import { UserContext } from '../contextState/contextState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from "../images/profile_pic_test.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { ChatFooterBar, ChatInput } from '../styles/styles';
import Conversation from './Conversation';
import { useDispatch } from 'react-redux';
import { GetChat,AuthenticateUser } from '../redux/slice/API';


const ChatScreen = ({ username, profilePic }) => {
    const userContext = useContext(UserContext);
    const { SetOpenChat,ChatTokenChange } = userContext;
    const [ChatToken,SetChatToken]=useState("");
    const [sender,SetSender]=useState(false)
const [AllMessage,SetAllMessage]=useState([])    
    const dispatch=useDispatch();

    


    useEffect(() => {
        const fetchChat = async () => {
            let chatToken = localStorage.getItem("chatToken");
            let token = localStorage.getItem("Token");

            // console.log(chatToken, 'chatToken');
           const action= await dispatch(GetChat({ chatToken: chatToken,token:token }));
          

           if(action.payload)
            {
                console.log(action.payload,'chat');
               await SetAllMessage(action.payload)
            }
        

        };

        fetchChat();
    }, [ChatTokenChange]);


    useEffect(()=>{

        console.log(AllMessage,'ALL MESSAGES')

    },[AllMessage])


    const handleKeyPress = async (event, key) => {
      if (event.key === 'Enter') {
        if (!event.target.value) {
          return;
        } else {
          const date = new Date();
          const showTime = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
          const new_message = { sender: true, message: event.target.value, time: showTime };
    
          const updatedMessages = {
            ...AllMessage,
            [key]: AllMessage[key] ? [...AllMessage[key], new_message] : [new_message]
          };
    
          console.log(new_message, 'new_message');
          await SetAllMessage(updatedMessages);
          event.target.value = '';
        }
      }
    };

    return (
      <StyledHome theme={userContext.theme}>
        <ChatHeader theme={userContext.theme}>
          <ProfileImgChatRoom src={`http://localhost:4000/upload/${profilePic}`} />
          <ChatHeading>{username}</ChatHeading>
          <div style={{ position: 'absolute', right: 20, top: 15, display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon style={{ marginRight: 20, position: 'relative', top: 3.5 }} icon={faSearch} />
            <CloseIcon onClick={() => SetOpenChat(false)} />
          </div>
        </ChatHeader>
  
        <div>
          {Object.keys(AllMessage).map(key => (
            <div key={key}>
              {AllMessage[key].map((message, index) => (
                <div key={index}>
                  <Conversation 
                    sender={message.sender} 
                    chat={message.message} 
                    time={message.time} 
                    isLast={index === AllMessage[key].length - 1} 
                  />
                </div>
              ))}
              <ChatFooterBar theme={userContext.theme}>
                <ChatInput 
                  onKeyDown={(event) => handleKeyPress(event, key)} 
                  theme={userContext.theme} 
                />
              </ChatFooterBar>
            </div>
          ))}
        </div>
      </StyledHome>
    );
   
}

export default ChatScreen;
