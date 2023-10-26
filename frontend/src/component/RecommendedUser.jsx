import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import { UserContext } from '../contextState/contextState';
import { UserDisplay,ProfilePic,UserName,ConnectButton,FinalConnectingButton, getDynamicStyle  } from '../styles/styles';
const RecommendedUser = () => {

    const style = getDynamicStyle('green'); 
    const userContext = useContext(UserContext);
    const { firstTimeUser,SetFirstTimeUser, } = userContext;
    const handleClose = () => {
        SetFirstTimeUser(false);
    };

    return (
        <Modal
            open={firstTimeUser}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={style}>
                <DialogTitle style={{ textAlign: "center" }}>Welcome to HealTogether- Connecting You to Similar Journeys</DialogTitle>
                <p style={{ textAlign: "center", marginBottom: 10 }}>Experience the healing journey with HealTogether - where understanding connections await.</p>
                
                {userContext.RecommendedUserList.map((user) => (
                    <UserDisplay key={user._id}>
                        <div>
                            <ProfilePic src={`http://localhost:4000/upload/${user.user_profile_pic}`} alt="Profile Pic" />
                            <UserName>{user.firstName} {user.surName}</UserName>
                        </div>
                        <ConnectButton>Connect</ConnectButton>
                    </UserDisplay>
                ))}
                
                <FinalConnectingButton onClick={handleClose}>All Ready To Begin the Healing Journey</FinalConnectingButton>
            </Box>
        </Modal>
    );
}

export default RecommendedUser;
