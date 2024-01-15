import React from 'react'
import { PostContainer,PostProfilePic,PostContent,ProfileHeadingPost,CommentSection,HeartContainer,HeartSVG,AnimatedHeartPath,HeartPath} from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
import TestProfilePic from "../images/beautiful-woman-street.jpg"
import { useState } from 'react';
import CommentIcon from "../images/hands_holding1.svg"
import HoldingHandsSVG from "../svg/holdinghand.svg"
import styled, { keyframes } from 'styled-components';
import HandIcon from '../SVG ANIMATION/HandIcon';
import MainHand from '../SVG ANIMATION/Main';
import MainHandAnimation from '../SVG ANIMATION/MainHandAnimation';
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

const SVGImage = styled.img`
  width: 100px; /* Adjust the size as needed */
  height: 100px;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-in-out; /* Apply animation on mount */
`;

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out; /* Apply animation on click */
`;
  const userContext = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [hi,setHi]=useState(false)
 
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
    <div onClick={()=>setHi(!hi)} style={{position:"relative",bottom:90}}>
{
 <HandIcon theme={userContext.theme}/>
 
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