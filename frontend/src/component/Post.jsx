import React from 'react'
import { PostContainer,PostProfilePic,PostContent,ProfileHeadingPost,CommentSection} from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
import TestProfilePic from "../images/beautiful-woman-street.jpg"
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HandIcon from '../SVG ANIMATION/HandIcon';
import MainComment from '../SVG ANIMATION/MainComment';
function Post({ isFirst, Date, PostText, Likes,Comments }) {
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



  const HandleLikes=()=>{

     SetLike(!like);
    console.log(like,'this is like')
    if(!like===true)
    {
      SetLikeCount(likesCount+1)

    }
    if(!like===false)
    {
      SetLikeCount(likesCount-1)

    }
  
  
  
  }

  const [like,SetLike]=useState(false)
 const [likesCount,SetLikeCount]=useState(Likes.length)
  return (
  <>
        <PostContainer theme={userContext.theme} isFirst={isFirst}>   
    <PostContent>
      <PostProfilePic src={TestProfilePic} alt="Profile" />
      <ProfileHeadingPost>
        <b>{userContext.UserFirstName} </b>shares her enchanting Mindful_Moments
        <br />
        <b>{Date}</b>
        <br/>
{PostText}       
      </ProfileHeadingPost>
    </PostContent>
    <CommentSection theme={userContext.theme}>
    <div onClick={() =>  HandleLikes() } style={{ position: "relative", bottom: 90, left: 20}}>
{
  <>
     <HandIcon theme={userContext.theme}/>
 <p style={{position:"relative",bottom:50,left:45}}>{likesCount}</p>
 <p style={{position:"relative",bottom:75,left:160}}>{Comments.length}</p>

 <div style={{position:"relative",left:100,bottom:205}}>
<MainComment theme={userContext.theme}/>
 </div>
 <p ></p>
 
  </>

}
 
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