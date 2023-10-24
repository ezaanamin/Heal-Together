import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import { UserContext } from '../Context/context';
import { UserDisplay,ProfilePic,UserName,ConnectButton,FinalConnectingButton } from '../styles/styles';
const RecommendedUser = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        overflow: 'hidden',
    };

    const {
        firstTimeUser,
        SetFirstTimeUser,
        RecommendedUserList
    } = useContext(UserContext);

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
                
                {RecommendedUserList.map((user) => (
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
