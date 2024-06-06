import React from 'react';
import { useContext } from 'react';
import { MessageConversation,MessageProfilePic } from '../styles/styles';
import { UserContext } from '../contextState/contextState';

const Conversation = ({chat,sender,time,isLast}) => {
  const userContext = useContext(UserContext);
  return (
      <>
      {
        sender?
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>


           <MessageConversation sender={sender} isLast={isLast} theme={userContext.theme}>       
<div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
<p style={{textAlign:"left"}}>{chat}</p>
<p style={{fontSize:11,textAlign:"right",position:"relative",right:5}}>{time}</p>

</div>


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

    
     
    
}

export default Conversation;
