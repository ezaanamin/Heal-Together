import React, { useEffect, useState } from 'react';
import { ChatSideBarDiv, SideBarChat, ChatSearchInputField, SearchIcon, ChatBox } from '../styles/styles';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import { UserFriends } from '../redux/slice/API';
import { useDispatch } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ChatSideBar = () => {
  const userContext = useContext(UserContext);
  const { openChat, SetOpenChat, SetCurrentName, SetChatProfilePic } = userContext;
  const [clickedStatus, setClickedStatus] = useState({});
  const [chatFriends, setChatFriends] = useState({});
  const HandleClick = (key, profile_pic) => {
    // console.log(profile_pic,'profile_pic')
    setClickedStatus(prevState => ({
      ...prevState,
      [key]: !prevState[key]

    }));
    SetCurrentName(key)
    SetChatProfilePic(profile_pic)
    SetOpenChat(true)

  }

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUserFriends = async () => {
      const token = localStorage.getItem("Token");
      if (token) {
        const action = await dispatch(UserFriends({ token }));

        if (action.payload) {
          console.log(action.payload.support_group, 'action')
          await setChatFriends(action.payload.support_group);

        }

      }
    };

    fetchUserFriends();
  }, []);

  // useEffect(()=>{
  //   console.log(chatFriends,'friends')
  // },[chatFriends])

  return (
    <ChatSideBarDiv width={openChat} theme={userContext.theme}>

      <SideBarChat>Chat</SideBarChat>

      <ChatSearchInputField theme={userContext.theme} type="text" placeholder="Search..." />
      <SearchIcon icon={faSearch} />

      {Object.keys(chatFriends).map(key => (
        <div key={key}>
          <ChatBox isClicked={clickedStatus[key] || false}
            onClick={() => HandleClick(key, chatFriends[key].profile_pic)} theme={userContext.theme}>
            <div style={{ display: "flex", flexDirection: "row" }}>


              <img style={{ width: 50, height: 50, marginTop: 10 }} src={`http://localhost:4000/upload/${chatFriends[key].profile_pic}`} />
              <h2 style={{ textAlign: "center", marginTop: 20 }}> {chatFriends[key].username}</h2>
            </div>
          </ChatBox>


        </div>
      ))}


    </ChatSideBarDiv>


  );
}

export default ChatSideBar;
