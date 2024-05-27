import React from 'react';
import { useContext } from 'react';
import { MessageConversation,MessageProfilePic } from '../styles/styles';
import { UserContext } from '../contextState/contextState';

const Conversation = ({chat}) => {
    const userContext = useContext(UserContext);
    const {openChat,currentChatName,ChatProfilePic} = userContext;
    return (
        <>
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}>

        <MessageProfilePic src={`http://localhost:4000/upload/${ChatProfilePic}`} />

           <MessageConversation theme={userContext.theme}>
            

{chat}

        </MessageConversation>

        
        </div>

        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end"}}>
<MessageProfilePic src={`http://localhost:4000/upload/${ChatProfilePic}`} />

   <MessageConversation theme={userContext.theme}>
    

{chat}

</MessageConversation>


</div>
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
