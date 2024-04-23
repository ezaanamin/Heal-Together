import React, { useEffect } from 'react'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
// import TestProfilePic from "../images/beautiful-woman-street.jpg"
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HandIcon from '../SVG ANIMATION/HandIcon';
import MainComment from '../SVG ANIMATION/MainComment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PostSupportMindFulMoments, GetCommentsMindFulMoments } from '../redux/slice/API';
import CommentMindFulMomentModal from './CommentMindFulMomentModal';
import io from 'socket.io-client';

import { PostContainer, PostProfilePic, PostContent, ProfileHeadingPost, CommentSection,PContainer,AnimatedContainer} from '../styles/styles'
function Post({ isFirst, Date, PostText, Likes, Comments, username, profile_pic, support }) {
  // const socket = io.connect(process.env.REACT_APP_BACKEND_PORT);

  // const [Loading,SetLoading]=useState(true)
  const [currentUsername, SetCurrentUsername] = useState("")




  const userContext = useContext(UserContext);
  const { SetCommentModal, SetLoading, Comment, SetComment, SetHasMore, SetCurrentCommentLength,SetCurrentMindfulMoment,currentCommentID,SetCurrentCommentID} = userContext;

  const dispatch = useDispatch();

  const HandleLikes = () => {
    SetLike(!like);
    //  console.log(like,'this is like')
    if (!like === true) {
      SetLikeCount(likesCount + 1)

    }
    if (!like === false) {
      SetLikeCount(likesCount - 1)

    }
    const promise = dispatch(PostSupportMindFulMoments({ username: userContext.UserUsername, MindfulMoments: PostText }))
    promise.then((action) => {
      console.log(action.payload, 'result')

      if (action.payload.message === "Success") {
        console.log(action.payload.message)
      }
      else {
        alert("Error")
      }

    })
  }

  const [like, SetLike] = useState(support)
  const [likesCount, SetLikeCount] = useState(Likes.length)
  const GetComments = async (PostText) => {

    SetCommentModal(true);
    SetLoading(true);
    console.log(username, 'username')
    await SetCurrentUsername(username);
 await SetCurrentMindfulMoment(PostText);
 await SetCurrentCommentLength(Comments);
 if(Comments<=5)
 {
  // alert("hoo")
  await SetCurrentCommentID(0);

 }
 else
 {
  // alert("bye")
 await  SetCurrentCommentID(5);


 }
    console.log(Comments,'comments lengths')

    


  
    // while(Comments!=Comment.length)
    // {
      
    // }


  
    const promise = await dispatch(GetCommentsMindFulMoments({ MindfulMoments: PostText,comment_id: currentCommentID}))
    if (GetCommentsMindFulMoments.fulfilled.match(promise)) {


      console.log(promise.payload, 'data')
    
      if (Comment == null) {
        await SetComment(promise.payload.data);


      }
      // else {
      //   const newData = promise.payload.data.flat();
      //   await SetComment(Comment => [...Comment, ...newData]);

      // }
      // if(Comment!=null)
      // {
      //   while(Comments!=Comment.length)
      //   {
      //     console.log("hiii")
      //     const newData = promise.payload.data.flat();
      //     await SetComment(Comment => [...Comment, ...newData]);
      //       skip+=5;

      //   }

        // if(Comments==Comment.length)
        // {
        //   SetLoading(false)
        // }

      // }






    }







    //  console.log(Comments,'number of comment for each post ')





    // const filtered = data.filter(item => item.status.includes("Pending"));
    // SetOrdersData(filtered)
    // setloading(false)

    // alert(Comments)






  }

  useEffect(() => {


    console.log(currentUsername, 'current username')
  }, [currentUsername])

  const fetchData = async () => {
    try {
      const promise = await dispatch(GetCommentsMindFulMoments({ MindfulMoments: PostText, comment_id: currentCommentID }));
      if (GetCommentsMindFulMoments.fulfilled.match(promise)) {

        const newData = promise.payload.data.flat();
        console.log(newData,'comments')
        SetCurrentCommentID(promise.payload.Comment_ID);
        // SetComment(prevComment => [...prevComment, ...newData]);
      } else {
        console.error("Failed to fetch comments:", promise.error);
      }
    } catch (error) {
      console.error('Failed fetching data:', error);
    }
  };

  return (
    <>
      {
        userContext.CommentModal && currentUsername ?
          <CommentMindFulMomentModal username={currentUsername} CommentLength={Comments} /> : null

      }


      <PostContainer theme={userContext.theme} isFirst={isFirst}>

        <PostContent>
          <Link to={`/${username}`}>
            <PostProfilePic src={`http://localhost:4000/upload/${profile_pic}`} alt="Profile" />
          </Link>
          <ProfileHeadingPost>
            <b>{username} </b>shares her enchanting Mindful_Moments
            <br />
            <b>{Date}</b>
            <br />
           {PostText}
          </ProfileHeadingPost>
        </PostContent>
        <CommentSection theme={userContext.theme}>
          <div style={{ position: "relative", bottom: 90, left: 20 }}>

            <>
              <div onClick={() => HandleLikes()}>
                <HandIcon theme={userContext.theme} liked={like} />
              </div>
              <p style={{ position: "relative", bottom: 50, left: 45 }}>{likesCount}</p>
              <p style={{ position: "relative", bottom: 75, left: 160 }}>{Comments}</p>

              <div onClick={() => GetComments(PostText)} style={{ position: "relative", left: 100, bottom: 205 }}>


                <MainComment theme={userContext.theme} />
              </div>
              <p ></p>

            </>



          </div>

          <PContainer>
            <AnimatedContainer>

            </AnimatedContainer>
          </PContainer>
        </CommentSection>

      </PostContainer>

    </>
  )
}

export default Post