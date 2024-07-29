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
const [messagelength,SetMessagesLength]=useState(0);    
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
 
    
  console.log(messagelength,'length')
  console.log(typeof AllMessage,'TYPE');
  console.log(typeof AllMessage.message,'TYPE1');
  SetAllMessage(prevMessages => [...prevMessages, message]);  

};
     
    
  
    console.log(AllMessage,'all messages')

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


    useEffect(() => {
      const updateMessagesLength = async () => {
        console.log(AllMessage, 'ALL MESSAGES');
  
        // SetMessagesLength(AllMessage.message.length);
        // console.log(AllMessage.message.length,'ALL MESSAGES')
      };
  
      updateMessagesLength(); // Call the async function
    }, [AllMessage]); // Dependency array: runs when AllMessage changes

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
    
      
          console.log(new_message, 'new_message');
          const messageWithToken = { message: new_message.message, time: new_message.time, Usertoken: token,chatToken:chatToken };
          Setnew_message_chat(messageWithToken);
          SetNewMessageAlert(!new_messageAlert)
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
        {AllMessage.map((message, index) => (
        <Conversation
          key={index}
          sender={message['2']}
          chat={message['3']}
          time={message['0']}
        />
      ))}
           
              <ChatFooterBar theme={userContext.theme}>
                <ChatInput 
                  onKeyDown={(event) => handleKeyPress(event)} 
                  theme={userContext.theme} 
                />
              </ChatFooterBar>
            </div>
        
      </StyledHome>
    );
   
}

export default ChatScreen;
