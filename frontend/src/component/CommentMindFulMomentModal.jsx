import React from 'react'
import { getModalStyle,MainHeading,useStyles,getDynamicStyle } from '../styles/styles';  
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState'
import { useState } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box } from '@mui/material';
function CommentMindFulMomentModal() {
    const [modalStyle] = useState(getModalStyle);
const userContext = useContext(UserContext);
const {SetCommentModal,theme} = userContext;
const style=getDynamicStyle();

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={userContext.CommentModal}
        onClose={()=>SetCommentModal(false)}
      >


    <Box sx={{ ...style, width: 450,height:400,borderRadius:10 }}>

 

  



</Box>
      


      </Modal>
    ) 




}


export default CommentMindFulMomentModal