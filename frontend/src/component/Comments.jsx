import React from 'react'
import { Profile } from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react'
function ProfileComponents({text}) {
  const userContext = useContext(UserContext);

  return (
<Profile theme={userContext.theme}>
  <p style={{ textAlign: "center" }}>
  {text}
  </p>
</Profile>
  )
}

export default ProfileComponents
