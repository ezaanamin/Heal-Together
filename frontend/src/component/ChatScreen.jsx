import React, { useEffect,useState,useContext } from 'react';
import { ChatHeader, StyledHome, ProfileImgChatRoom, ChatHeading,SendIcon } from "../styles/styles"
import { UserContext } from '../contextState/contextState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShare } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from "../images/profile_pic_test.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { ChatFooterBar, ChatInput } from '../styles/styles';
import Conversation from './Conversation';
import { useDispatch } from 'react-redux';
import { GetChat,AuthenticateUser } from '../redux/slice/API';
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import TagFacesIcon from '@mui/icons-material/TagFaces';

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
const [showEmoji, setShowEmojiPicker] = useState(false);

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
    const [inputValue, setInputValue] = useState('');
    const handleKeyPress = async (event, key) => {
      let token=sessionStorage.getItem('Token');
      let chatToken=sessionStorage.getItem('chatToken')
      if (event.key === 'Enter') {
        if (!event.target.value) {

          return;
        } else {
          console.log(event.target.value,'value')
          setInputValue(event.target.value)
          const date = new Date();
          const dateOnly = date.toISOString().split('T')[0]; 
          const showTime = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
          // const new_message = { sender: true, message: event.target.value, time: showTime };
        const  new_message=[showTime,dateOnly,true,inputValue]

          console.log(new_message, 'new_message');
          SetAllMessage(prevMessages => [...prevMessages, new_message]);  

          const messageWithToken = { message: inputValue, time: new_message.time, Usertoken: token,chatToken:chatToken };
          Setnew_message_chat(messageWithToken);
          SetNewMessageAlert(!new_messageAlert)
          event.target.value = '';
          setInputValue("");
        }
      }
    };
   

 

    const addEmoji = (e) => {
      console.log("hiii")
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach((el) => codesArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codesArray);
      setInputValue(inputValue + emoji);
      console.log(inputValue)
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
          isLast={index === AllMessage.length - 1} 
        />
      ))}
           {
        showEmoji?
        <div  style={{ position: 'absolute',top:700,height:200}}>
        <Picker
        
        data={data}
        emojiSize={20}
        emojiButtonSize={28}
        onEmojiSelect={addEmoji}
        maxFrequentRows={0}
      />

  
      </div>
      :
      null


      }
              <ChatFooterBar theme={userContext.theme}>
              <ChatInput 
  onKeyDown={(event) => handleKeyPress(event)} 
  theme={userContext.theme} 
  value={inputValue}
  onChange={(event) => setInputValue(event.target.value)}
/>
                        <TagFacesIcon style={{ position: 'absolute',left:160,top:10 }} fontSize="large"  onClick={() => setShowEmojiPicker(!showEmoji)} />
                        
                      <SendIcon icon={faShare} />
              </ChatFooterBar>
            </div>
        
      </StyledHome>
    );
   
}

export default ChatScreen;