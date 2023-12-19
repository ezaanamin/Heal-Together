import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import { getDynamicStyle,MainHeading,Text,Logo,LoginButtonModal,CreateAccountModal } from '../styles/styles';
function UserFriendModal({support_group}) {


  const userContext = useContext(UserContext);
  const {SetUserFriendModal} = userContext;
  const style=getDynamicStyle();

  const handleClose=()=>{

    SetUserFriendModal(false);
  }

//   for (const user in support_group) {
//     console.log(user, ":", support_group[user].username, support_group[user].profile_pic);
//   }
  return (
    <Modal
    open={userContext.userFriendsModal}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  
  >

    <Box sx={{ ...style, width: 400,height:500,borderRadius:10 }}>
    <MainHeading>Support  Group</MainHeading>
    {support_group ?
  Object.keys(support_group).map((user) => (
    <div key={user}>
      <img style={{ height: 100 }} src={`http://localhost:4000/upload/${support_group[user].profile_pic}`} alt="Profile Pic" />
      <a href={`http://localhost:3000/${support_group[user].username}`}>{user}</a>
      {/* <p>Profile Pic: {support_group[user].profile_pic}</p> */}
      {/* Add any other user information you want to display */}
    </div>
  ))
  : null
}

  



</Box>
</Modal>

  )

}

export default UserFriendModal