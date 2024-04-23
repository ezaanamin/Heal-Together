import React, { useState, useContext, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box} from '@mui/material';
import { UserContext } from '../contextState/contextState';
import { CommentsHeading, getModalStyle, getDynamicStyle} from '../styles/styles';
import Loading from './Loading';
import CommentUser from './CommentUser';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { GetCommentsMindFulMoments } from '../redux/slice/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';

function CommentMindFulMomentModal({ username, CommentLength }) {
  const [modalStyle] = useState(getModalStyle);
  const dispatch = useDispatch();
  // const [alertTriggered, setAlertTriggered] = useState(false);
  const userContext = useContext(UserContext);
  const { SetCommentModal, Comment, SetComment, SetHasMore, HasMore, skip, SetSkip, CurrentCommentLength, currentMindfulMoment, SetLoading, currentCommentID, SetCurrentCommentID } = userContext;
  const style = getDynamicStyle();

  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (Comment != null && CurrentCommentLength == Comment.length) {
      SetLoading(false);
    }
  }, [Comment]);
  const fetchData = async () => {
    SetLoading(true); 
  
    try {
    // console.log(currentCommentID,'comment id');
      const promise = await dispatch(GetCommentsMindFulMoments({ MindfulMoments: currentMindfulMoment, comment_id: currentCommentID }));
      

      if (GetCommentsMindFulMoments.fulfilled.match(promise)) {
        const newData = promise.payload.data.flat();
        console.log(newData, 'comments');
        
        if (newData.length === 0) {
          SetLoading(false);
          setHasMore(false)
          // alert("done all")
        } else {
          SetCurrentCommentID(promise.payload.Comment_ID); 
          SetComment(prevComment => [...prevComment, ...newData]); 
        }
      } else {
        console.error("Failed to fetch comments:", promise.error);
        SetLoading(false); 
        setHasMore(false)
      }
    } catch (error) {
      console.error('Failed fetching data:', error);
      SetLoading(false);
      setHasMore(false)

    }
  };

  const HandleClose=()=>{

    SetComment(null);
    SetCommentModal(false);
    SetCurrentCommentID(0);



  }
  return (
    <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={userContext.CommentModal}
    onClose={() => HandleClose()}
  >
   
<>
<Box sx={{ ...style, ...modalStyle,width:600}}>
<IconButton
      style={{ position: "absolute", top: "0", right: "0" }}
      onClick={() => HandleClose()} 
    >
      <CloseIcon />
    </IconButton>
<div>
<CommentsHeading>{username} Mindful Moments </CommentsHeading>
    <hr />
    {Comment?
       <InfiniteScroll
      dataLength={Comment.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Loading/>}
      height={300}
   
   
    >
      {/* {items.map((_, index) => (
        <div key={index}>
          div - #{index}
        </div>
      ))} */}
      {Comment && Array.isArray(Comment) && Comment.map((comment, index) => (
  <div key={index}>
    <CommentUser 
      comment={comment.comment}
      username={comment.username}
      profile_pic={comment.profile_pic}
    />
  </div>
))}

    </InfiniteScroll>:null

    }
 
  </div>
  {
          Comment==null?
          <Loading/>
         :
          null
        } 
</Box>

</>
   

       
      </Modal>
  );
}


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

export default CommentMindFulMomentModal;

{/* // {PostContent.map((postData, index) => (
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
// ))}   */}