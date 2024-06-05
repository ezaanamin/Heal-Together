import React from 'react';
import { useContext } from 'react';
import { MessageConversation,MessageProfilePic } from '../styles/styles';
import { UserContext } from '../contextState/contextState';

const Conversation = ({chat,sender,time,isLast}) => {
  const userContext = useContext(UserContext);
  const {openChat,currentChatName,ChatProfilePic} = userContext;
  return (
      <>

      {
        sender?
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>


           <MessageConversation sender={sender} isLast={isLast} theme={userContext.theme}>
       

{chat}


{
  <p style={{fontSize:11,textAlign:"right",position:"relative",right:5}}>{time}</p>
}

        </MessageConversation  >

        
        </div>:


<div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end"}}>

 <MessageConversation  sender={sender} isLast={isLast}  theme={userContext.theme}>


{chat}
{
  <p style={{fontSize:11,textAlign:"right",position:"relative",right:5}}>{time}</p>
}


</MessageConversation>


</div>
      }


</>
    )
{/* <>
  <div style={{margin: "0 10px"}}>Child 1</div>
  <div style={{margin: "0 10px"}}>Child 2</div>
  <div style={{margin: "0 10px"}}>Child 3</div>
</div>

<div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end"}}>
  <div style={{margin: "0 10px"}}>Child 1</div>
  <div style={{margin: "0 10px"}}>Child 2</div>
  <div style={{margin: "0 10px"}}>Child 3</div>
</div>
</> */}
    
     
    
}

export default Conversation;
