import React, { useState, useContext } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box } from '@mui/material';
import { UserContext } from '../contextState/contextState';
import { CommentsHeading,CommentLine, getModalStyle, getDynamicStyle} from '../styles/styles';
import Loading from './Loading';
function CommentMindFulMomentModal({username}) {
    const [modalStyle] = useState(getModalStyle);
    const userContext = useContext(UserContext);
    const { SetCommentModal, } = userContext;
    const style = getDynamicStyle();
    
    // console.log( userContext.Loading,'loading')
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={userContext.CommentModal}
            onClose={() => SetCommentModal(false)}
        >
            <Box sx={{ ...style, ...modalStyle, width: 450, height: 400 }}>
                <CommentsHeading>{username} Mindful Moments </CommentsHeading>
              <CommentLine theme={userContext.theme} />
           
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
