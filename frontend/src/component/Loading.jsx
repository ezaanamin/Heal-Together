import React from 'react'
import {LoadContainer,Ring } from '../styles/styles';
import { UserContext } from '../contextState/contextState';
import { useContext } from 'react';

function Loading() {
      const userContext = useContext(UserContext);
  return (
    <LoadContainer className="load-4">

    <Ring theme={userContext.theme} />
  </LoadContainer>
  )
}

export default Loading