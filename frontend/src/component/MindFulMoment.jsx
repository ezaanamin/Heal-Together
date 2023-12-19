import React from 'react'
import { MindFulMomentContainer } from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react'
function MindFulMoment() {
    const userContext = useContext(UserContext);

  return (
    <MindFulMomentContainer theme={userContext.theme}> 


    

    </MindFulMomentContainer>
  )
}

export default MindFulMoment