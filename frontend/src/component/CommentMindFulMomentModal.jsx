import React, { useState, useContext, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box} from '@mui/material';
import { UserContext } from '../contextState/contextState';
import { CommentsHeading,CommentLine, getModalStyle, getDynamicStyle} from '../styles/styles';
import Loading from './Loading';
import CommentUser from './CommentUser';
import InfiniteScroll from 'react-infinite-scroll-component';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { GetCommentsMindFulMoments } from '../redux/slice/API';
import { useDispatch } from 'react-redux';
function CommentMindFulMomentModal({username,CommentLength}) {
    const [modalStyle] = useState(getModalStyle);
    const dispatch = useDispatch();

    const userContext = useContext(UserContext);
    const { SetCommentModal,Comment ,SetComment,SetHasMore,HasMore, skip,SetSkip,limit,CurrentCommentLength,currentMindfulMoment,SetLoading} = userContext;
    const style = getDynamicStyle();
    
    useEffect(() => {
      const handleScroll = () => {
        SetHasMore(true)
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(()=>{

        console.log(Comment,'comments ezaan')
        console.log(CommentLength,'length')

        if(Comment!=null)
        {
          console.log("Has true")
          // SetHasMore(true);
        }

    },[Comment])
    // console.log( userContext.Loading,'loading')

    useEffect(()=>{

      const fetchData = async () => {
        if (HasMore) {
          if (Comment.length === CurrentCommentLength) {
            SetHasMore(false);
            SetLoading(false)
            
          } else {
            try {
              const promise = await dispatch(GetCommentsMindFulMoments({ MindfulMoments: currentMindfulMoment, skip: skip, limit: limit }));
              if (GetCommentsMindFulMoments.fulfilled.match(promise)) {
                const newData = promise.payload.data.flat();
                await SetComment(Comment => [...Comment, ...newData]);
                SetSkip(skip + 5);
                SetHasMore(false)
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
        }
      };
    
      fetchData();


    },[HasMore])

    const HandleClose=()=>{

      SetComment(null);
      SetCommentModal(false)


    }
    return (
      <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={userContext.CommentModal}
      onClose={() => HandleClose()}
    >
     
  
            <Box sx={{ ...style, ...modalStyle, width: 550, height: 500 }}>
            <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={() => HandleClose()} 
      >
        <CloseIcon />
      </IconButton>
                <CommentsHeading>{username} Mindful Moments </CommentsHeading>
              <CommentLine theme={userContext.theme} />

  {Comment && Array.isArray(Comment) && Comment.map((comment, index) => (
    <div style={{overflow:"scroll"}} key={index}>
      <CommentUser 
        comment={comment.comment}
        username={comment.username}
        profile_pic={comment.profile_pic}
      />
    </div>
  ))}

           {/* <CommentUser/>
           
           <CommentUser/> */}
         {
            userContext.Loading?
            <Loading/>
           :
            null
          } 
 
            </Box>
        </Modal>
    );
}

export default CommentMindFulMomentModal;

// {PostContent.map((postData, index) => (
//   <div key={index}>
//     <Post
//     username={postData.username}
//       isFirst={index === 0}
//       PostText={postData.MindfulMoments}
//       Date={postData.Date}
//       Likes={postData.support}
//       profile_pic={postData.profile_pic}
//       support={postData.Support}
//       Comments={postData.NumberOfComments}
//     />

  
//   </div>
// ))}  