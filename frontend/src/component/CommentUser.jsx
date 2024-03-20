import React from 'react'
import Profile from "../images/beautiful-woman-street.jpg"
import { PostContent,CommentsProfilePic,CommentsDiv } from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

function CommentUser({username,comment,profile_pic}) {
  const userContext = useContext(UserContext);

  return (
    <PostContent>
    <Link to={`/${username}`}>
      <CommentsProfilePic src={`http://localhost:4000/upload/${profile_pic}`}  alt="Profile" />
      </Link>
      <CommentsDiv theme={userContext.theme}>
      <p style={{marginLeft:20,fontWeight:'bold'}}> {username} </p>
      <p style={{marginRight:20,marginLeft:20}}>{comment}</p>     

      </CommentsDiv>
    </PostContent>
  )
}

export default CommentUser