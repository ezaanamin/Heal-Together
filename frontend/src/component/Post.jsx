import React from 'react'
import { PostContainer,PostProfilePic,PostContent,ProfileHeadingPost,CommentSection,HeartContainer,HeartSVG,HeartPath} from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react';
import TestProfilePic from "../images/beautiful-woman-street.jpg"
import { useState } from 'react';
function Post({ isFirst,Date,PostText }) {
  
  const userContext = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

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
    <HeartContainer onClick={handleClick} theme={userContext.theme}>
      <HeartSVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <HeartPath
          theme={userContext.theme}
          isClicked={isClicked}
          clipRule="evenodd"
          d="M6.47358 1.96511C8.27963 1.93827 10.2651 2.62414 12 4.04838C13.7349 2.62414 15.7204 1.93827 17.5264 1.96511C19.5142 1.99465 21.3334 2.90112 22.2141 4.68531C23.0878 6.45529 22.9326 8.87625 21.4643 11.7362C19.9939 14.6003 17.1643 18.0021 12.4867 21.8566C12.4382 21.898 12.3855 21.9324 12.3298 21.9596C12.1243 22.0601 11.8798 22.0624 11.6702 21.9596C11.6145 21.9324 11.5618 21.898 11.5133 21.8566C6.83565 18.0021 4.00609 14.6003 2.53569 11.7362C1.06742 8.87625 0.912211 6.45529 1.78589 4.68531C2.66659 2.90112 4.4858 1.99465 6.47358 1.96511Z"
          fillRule="evenodd"
        />
      </HeartSVG>
    </HeartContainer>
</CommentSection>

  </PostContainer>
 
  </>
  )
}

export default Post