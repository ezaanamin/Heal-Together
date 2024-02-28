import React from 'react'
import CommentBLue from './CommentBLue';
import CommentDefault from './CommentDefault';
import CommentGreen from './CommentGreen';
import CommentPurple from './CommentPurple';
function MainComment({theme}) {


const themeComponents = {
    blue: { icon: CommentBLue,},
    green: { icon: CommentGreen,  },
    purple: { icon: CommentPurple,},
    default: { icon: CommentDefault, },
  };
  
  const { icon: Icon} = themeComponents[theme] || themeComponents.default;


  return (
 
    <Icon/>
  )
}

export default MainComment