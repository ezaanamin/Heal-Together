import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import { UserContext } from '../Context/context';
import { styled } from 'styled-components';

const UserDisplay = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
`;

const ProfilePic = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 10px;
`;

const UserName = styled.h3`
    margin: 0;
`;

const ConnectButton = styled.button`
    background-color: #6fbf73;
    color: white;
    border-radius: 10px;
    border-color: #6fbf73;
    height: 30px;
    width:130px;
  
    &:hover {
        background-color: #9bcfc9;
        border-color: #9bcfc9;
    }
`;

const FinalConnectingButton = styled.button`
    height: 50px;
    font-size: 15px;
    background-color: #6fbf73;
    color: white;
    border-radius: 10px;
    border-color: #6fbf73;
    margin: 0 auto;
    display: block;
    flex: 1;
    &:hover {
        background-color: #9bcfc9;
        border-color: #9bcfc9;
    }
`;

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
