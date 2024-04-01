import React, { useState, useContext, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import { Box} from '@mui/material';
import { UserContext } from '../contextState/contextState';
import { CommentsHeading,CommentLine, getModalStyle, getDynamicStyle} from '../styles/styles';
import Loading from './Loading';
import CommentUser from './CommentUser';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { GetCommentsMindFulMoments } from '../redux/slice/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
function CommentMindFulMomentModal({username,CommentLength}) {
    const [modalStyle] = useState(getModalStyle);
    const dispatch = useDispatch();
    const [alertTriggered, setAlertTriggered] = useState(false);
    const userContext = useContext(UserContext);
    const { SetCommentModal,Comment ,SetComment,SetHasMore,HasMore, skip,SetSkip,limit,CurrentCommentLength,currentMindfulMoment,SetLoading} = userContext;
    const style = getDynamicStyle();
 
    

      const [items, setItems] = useState(Array.from({ length: 20 }));
      const [hasMore, setHasMore] = useState(true);
    
      const fetchMoreData = () => {
        if (items.length >= 200) {
          setHasMore(false);
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          setItems(prevItems =>
            prevItems.concat(Array.from({ length: 20 }))
          );
        }, 500);
      
 
      }


    useEffect(()=>{

        console.log(Comment,'comments ezaan')
        console.log(CommentLength,'length')

        if(Comment!=null && CurrentCommentLength==Comment.length)
        {
    //  alert("done")
          
            SetLoading(false)
        
          // SetHasMore(true);
        }
      
      
       

    },[Comment])
    // console.log( userContext.Loading,'loading')

    // useEffect(()=>{

    
    
    //   fetchData();


    // },[HasMore])


    const fetchData = async () => {
      try {
        if (Comment.length === CurrentCommentLength || Comment.length > CommentLength) {
          setHasMore(false);
        } else {
          // Simulate a delay before fetching data
          setTimeout(async () => {
            const promise = await dispatch(GetCommentsMindFulMoments({ MindfulMoments: currentMindfulMoment, skip: skip, limit: limit }));
            if (GetCommentsMindFulMoments.fulfilled.match(promise)) {
              const newData = promise.payload.data.flat();
              await SetComment(prevComment => [...prevComment, ...newData]);
              SetSkip(prevSkip => prevSkip + 5);
            }
          }, 500); // Adjust the delay time as needed
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const HandleClose=()=>{

      SetComment(null);
      SetCommentModal(false);
       SetSkip(0);



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