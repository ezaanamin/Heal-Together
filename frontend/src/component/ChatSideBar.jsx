import React, { useEffect, useState } from 'react';
import { ChatSideBarDiv, SideBarChat, ChatSearchInputField, SearchIcon, ChatBox } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import { UserFriends } from '../redux/slice/API';
import { useDispatch } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GetConversation } from '../redux/slice/API';
import { io } from 'socket.io-client';

const ChatSideBar = () => {
  let token=sessionStorage.getItem("Token")
  const userContext = useContext(UserContext);
  const { openChat, SetOpenChat, SetCurrentName,currentChatName, SetChatProfilePic,ChatTokenChange,SetChatTokenChange } = userContext;
  const [clickedStatus, setClickedStatus] = useState({});
  const [chatFriends, setChatFriends] = useState({});
  const [SearchUser,SetSearchUser]=useState("")
  const [filterChat,SetFilterChat]=useState({})
  const [Filter,SetFilter]=useState(false)
  const [isOpen,SetIsOpen]=useState(false)
  useEffect(()=>{
    const token = sessionStorage.getItem('chatToken');
    const socket = io('http://localhost:4000');

    if(token)
      {
        socket.emit("join_room",token)

      }

    
  },[ChatTokenChange])
  
const HandleClick = async (key, profile_pic,username) => {
 
    
    setClickedStatus(prevState => ({
      [key]: !prevState[key]

    }));
    console.log(clickedStatus,'clickedStatus')

    SetCurrentName(key)
    let action= await dispatch(GetConversation({ token: token, received_name: username}));

 
    if(action.payload.token)
      {
        console.log(action.payload.token,'chat token')
        sessionStorage.setItem('chatToken', JSON.stringify(action.payload.token));
    
        SetChatTokenChange(!ChatTokenChange)
      }
    SetChatProfilePic(profile_pic)
    SetOpenChat(true)

  }

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUserFriends = async () => {
      const token = sessionStorage.getItem("Token");
      if (token) {
        const action = await dispatch(UserFriends({ token }));

        if (action.payload) {
          console.log(action.payload.support_group, 'friends')
          await setChatFriends(action.payload.support_group);
          await SetFilterChat(action.payload.support_group)

        }

      }
    };

    fetchUserFriends();
  }, []);

  // useEffect(() => {
  //   const keys = Object.keys(clickedStatus);
  //   const updatedStatus = {};
  //   if(keys.length>1)
  //   {
  //     for (let i = 0; i < keys.length - 1; i++) {
  //       console.log(keys[i],'ezaan')
  //       updatedStatus[keys[i]] = false;
  //     }
  //     updatedStatus[keys[keys.length-1]]=true
  //     console.log(updatedStatus,'ezaan')
  //     // console.log(,'ezaan')
  //     setClickedStatus(updatedStatus);

  //   }
  
  // }, [clickedStatus, currentChatName]);
  const SearchChatUser  = async (event) => {
    const newSearchUser = event.toLowerCase();
  
    SetSearchUser(newSearchUser);
  
    console.log(newSearchUser);
  
    // Filter chatFriends based on the newSearchUser
    const filteredFriends = Object.values(chatFriends).filter(friend =>
      friend.username.toLowerCase().includes(newSearchUser)
    );
  
    console.log(filteredFriends, 'filtered friends');
    await SetFilterChat(filteredFriends)
  };

  useEffect(() => {
    const updateFilterChat = async () => {
      if (SearchUser === "") {
        SetFilter(false);
        await SetFilterChat(chatFriends);
        console.log(filterChat,'chat'); 
      } else {
        SetFilter(true);
        console.log(filterChat,'chat');

      }
    };
  
    updateFilterChat();
  }, [SearchUser]); 

  

  return (
    <ChatSideBarDiv width={openChat} theme={userContext.theme}>

      <SideBarChat>Chat</SideBarChat>

      <ChatSearchInputField value={SearchUser} onChange={(event)=>SearchChatUser(event.target.value)} theme={userContext.theme} type="text" placeholder="Search..." />
      <SearchIcon icon={faSearch} />

      {Object.keys(filterChat).map(key => (
        <div key={key}>
          <ChatBox isClicked={clickedStatus[key] || false}
            onClick={() => HandleClick(key, filterChat[key].profile_pic,filterChat[key].username)} theme={userContext.theme}>
            <div style={{ display: "flex", flexDirection: "row" }}>


              <img style={{ width: 50, height: 50, marginTop: 10 }} src={`http://localhost:4000/upload/${filterChat[key].profile_pic}`} />
              <h2 style={{ textAlign: "center", marginTop: 20,textTransform:"capitalize" }}> {filterChat[key].username}</h2>

            </div>
          </ChatBox>


        </div>
      ))}


    </ChatSideBarDiv>


  );
}

export default ChatSideBar;
