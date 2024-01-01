import React from 'react'
import { PostContainer,PostProfilePic,PostContent,ProfileHeadingPost,PostInfoContainer,PostTime} from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
import TestProfilePic from "../images/beautiful-woman-street.jpg"
function Post() {
    const userContext = useContext(UserContext);

  return (
  <>
    <PostContainer theme={userContext.theme}>
    <PostContent>
      <PostProfilePic src={TestProfilePic} alt="Profile" />
      <ProfileHeadingPost>
        <b>{userContext.UserFirstName} </b>shares her enchanting Mindful_Moments
        <br />
        <b>1 year ago</b>
        <br/>
        Just had a great meditation session this morning. It really helps me find some peace in the chaos of my mind. 🧘‍♂️ #Meditation #MentalHealth
       
      </ProfileHeadingPost>
    </PostContent>
  </PostContainer>
  </>
  )
}

export default Post