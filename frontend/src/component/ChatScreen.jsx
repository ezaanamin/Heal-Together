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
import { GetChat } from '../redux/slice/API';

const ChatScreen = ({ username, profilePic }) => {
    const userContext = useContext(UserContext);
    const { SetOpenChat,ChatTokenChange } = userContext;
    const [ChatToken,SetChatToken]=useState("");
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

    return (
        <StyledHome theme={userContext.theme}>
            <ChatHeader theme={userContext.theme}>
                <ProfileImgChatRoom src={`http://localhost:4000/upload/${profilePic}`} />
                <ChatHeading>{username} </ChatHeading>
                <div style={{ position: "absolute", right: 20, top: 15, display: "flex", flexDirection: "row" }} >
                    <FontAwesomeIcon style={{ marginRight: 20, position: "relative", top: 3.5 }} icon={faSearch} />
                    <CloseIcon onClick={() => SetOpenChat(false)} />
                </div>
            </ChatHeader>

{/* <Conversation chat={"hi"} sender={true}/>
<Conversation chat={"hi"} sender={true}/>
<Conversation chat={"hi"} sender={false}/> */}
  <div>
  {/* {AllMessage && AllMessage.length > 0 ? (
        AllMessage.map((_, index) => (
          <div key={index}>
         <Conversation chat={index.chat} sender={index.sender}/>
          </div>
        ))
      ) : null}
     */}

<div>
 
<div>
      {Object.keys(AllMessage).map(key => (
        <div key={key}>
          {AllMessage[key].map((message, index) => (
            <div key={index}>
              <Conversation sender={message.sender} chat={message.message} time={message.time}         isLast={index === AllMessage[key].length-1 }/>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
    </div>


            <ChatFooterBar theme={UserContext.theme}>
 
                <ChatInput theme={userContext.theme} />
            </ChatFooterBar>


        </StyledHome>
    );
}

export default ChatScreen;
