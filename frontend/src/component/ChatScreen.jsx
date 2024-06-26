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
import { io } from 'socket.io-client';

const ChatScreen = ({ username, profilePic }) => {
  const socket = io('http://localhost:4000');

    const userContext = useContext(UserContext);
    const { SetOpenChat,ChatTokenChange } = userContext;
    const [ChatToken,SetChatToken]=useState("");
    const [FetchMessage,SetFetchMessage]=useState(false)
    const [sender,SetSender]=useState(false)
const [AllMessage,SetAllMessage]=useState([]);
const [new_message_chat,Setnew_message_chat]=useState([]);
const [new_messageAlert,SetNewMessageAlert]=useState(false);    
    const dispatch=useDispatch();

  useEffect(()=>{
    const token = sessionStorage.getItem('Token');
    socket.emit("setup",token)
  },[])

  useEffect(() => {
    if (new_message_chat) {
      socket.emit('new_message', new_message_chat);
    }
  }, [new_messageAlert]);

  useEffect(() => {
    const handleMessageReceived = async (message) => {
      console.log('Message received from server:', message);
      const arrayFromValues = Object.values(message);
      await     SetAllMessage(prevMessages => ([...prevMessages, message]));
    };
  
    socket.on('message_received', handleMessageReceived);
  
    return () => {
      socket.off('message_received', handleMessageReceived);
    };
  }, [new_message_chat]);

    useEffect(() => {
        const fetchChat = async () => {
            let chatToken = sessionStorage.getItem("chatToken");
            let token = sessionStorage.getItem("Token");

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
      let token=sessionStorage.getItem('Token');
      let chatToken=sessionStorage.getItem('chatToken')
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
          const messageWithToken = { message: new_message.message, time: new_message.time, Usertoken: token,chatToken:chatToken };
          Setnew_message_chat(messageWithToken);
          SetNewMessageAlert(!new_messageAlert)
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
