import React, { useState, useContext, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box } from '@mui/material';
import { UserContext } from '../contextState/contextState';
import { CommentsHeading,CommentLine, getModalStyle, getDynamicStyle} from '../styles/styles';
import Loading from './Loading';
import CommentUser from './CommentUser';
function CommentMindFulMomentModal({username}) {
    const [modalStyle] = useState(getModalStyle);
    const userContext = useContext(UserContext);
    const { SetCommentModal,Comment } = userContext;
    const style = getDynamicStyle();
    
    // useEffect(()=>{

    //     console.log(typeof(Comment),'comments ezaan')

    // },[Comment])
    // console.log( userContext.Loading,'loading')
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={userContext.CommentModal}
            onClose={() => SetCommentModal(false)}
        >
            <Box sx={{ ...style, ...modalStyle, width: 550, height: 500 }}>
                <CommentsHeading>{username} Mindful Moments </CommentsHeading>
              <CommentLine theme={userContext.theme} />
   
              {Comment && Object.keys(Comment).map((key, index) => (
  <div key={index}>
  <CommentUser 
  comment={Comment[key].comment}
  username={Comment[key].userInfo.username} // Accessing nested property userInfo.username
  profile_pic={Comment[key].userInfo.user_profile_pic}
/>

  </div>
))}
           {/* <CommentUser/>
           <CommentUser/> */}
          {
            userContext.Loading?
            <Loading/>:
            null
          }
 
            </Box>
        </Modal>
    );
}

export default CommentMindFulMomentModal;
