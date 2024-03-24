import React, { useEffect } from 'react'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
// import TestProfilePic from "../images/beautiful-woman-street.jpg"
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HandIcon from '../SVG ANIMATION/HandIcon';
import MainComment from '../SVG ANIMATION/MainComment';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { PostSupportMindFulMoments,GetCommentsMindFulMoments } from '../redux/slice/API';
import CommentMindFulMomentModal from './CommentMindFulMomentModal';
import io from 'socket.io-client';

import { PostContainer,PostProfilePic,PostContent,ProfileHeadingPost,CommentSection} from '../styles/styles'
function Post({ isFirst, Date, PostText, Likes,Comments,username,profile_pic,support}) {
  // const socket = io.connect(process.env.REACT_APP_BACKEND_PORT);

  // const [Loading,SetLoading]=useState(true)
  const [currentUsername,SetCurrentUsername]=useState("")



  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AnimatedContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out; 
`;
  const userContext = useContext(UserContext);
  const {SetCommentModal,SetLoading,Comment,SetComment,} = userContext;

  const dispatch = useDispatch();

  const HandleLikes=()=>{
    SetLike(!like);
  //  console.log(like,'this is like')
   if(!like===true)
   {
     SetLikeCount(likesCount+1)

   }
   if(!like===false)
   {
     SetLikeCount(likesCount-1)

   }
   const promise = dispatch(PostSupportMindFulMoments({username:userContext.UserUsername,MindfulMoments:PostText}))
   promise.then((action) => {
    console.log(action.payload,'result')

    if(action.payload.message==="Success")
    {
      console.log(action.payload.message)
    }
    else
    {
      alert("Error")
    }

   })
 }

  const [like,SetLike]=useState(support)
 const [likesCount,SetLikeCount]=useState(Likes.length)
 const GetComments = async (PostText) => {
 await SetComment(null)
  SetLoading(true);
  console.log(username,'username')
  await SetCurrentUsername(username); 
  SetComment(null)
  SetCommentModal(true);

  let skip=0;
  let limit=5;

  
  console.log(skip,'skip',limit,'limit')
         const promise= await dispatch(GetCommentsMindFulMoments({MindfulMoments:PostText,skip:skip,limit:limit}))
            if (GetCommentsMindFulMoments.fulfilled.match(promise)) {

         
                console.log(promise.payload,'data')
              await  SetComment(promise.payload.data);
             
              
           
              
         





               }



  
    //  console.log(Comments,'number of comment for each post ')

  

  
 
        // const filtered = data.filter(item => item.status.includes("Pending"));
        // SetOrdersData(filtered)
        // setloading(false)
    
        // alert(Comments)
      
       



  
   }

   useEffect(()=>{


    console.log(currentUsername,'current username')
   },[currentUsername])
  


  return (
  <>
{
  userContext.CommentModal && currentUsername?
  <CommentMindFulMomentModal username={currentUsername}/>:null

}

   
        <PostContainer theme={userContext.theme} isFirst={isFirst}>   
 
    <PostContent>
    <Link to={`/${username}`}>
      <PostProfilePic src={`http://localhost:4000/upload/${profile_pic}`}  alt="Profile" />
      </Link>
      <ProfileHeadingPost>
        <b>{username} </b>shares her enchanting Mindful_Moments
        <br />
        <b>{Date}</b>
        <br/>
{PostText}       
      </ProfileHeadingPost>
    </PostContent>
    <CommentSection theme={userContext.theme}>
    <div  style={{ position: "relative", bottom: 90, left: 20}}>

  <>
  <div onClick={() =>  HandleLikes() }>
     <HandIcon theme={userContext.theme} liked={like}/>
     </div>
 <p style={{position:"relative",bottom:50,left:45}}>{likesCount}</p>
 <p style={{position:"relative",bottom:75,left:160}}>{Comments}</p>

 <div onClick={()=>GetComments(PostText)} style={{position:"relative",left:100,bottom:205}}>


<MainComment  theme={userContext.theme}/>
 </div>
 <p ></p>
 
  </>


 
 </div>

    <Container>
      <AnimatedContainer>
       
      </AnimatedContainer>
    </Container>
</CommentSection>

  </PostContainer> 
 
  </>
  )
}

export default Post