import React from 'react'
import { Profile } from '../styles/styles'
import { UserContext } from '../contextState/contextState'
import { useContext } from 'react'
function ProfileCompoents() {
  const userContext = useContext(UserContext);

  return (
<Profile theme={userContext.theme}>
  <p style={{ textAlign: "center" }}>
    Connect with Loved Ones: Social bonds are essential for our well-being. Reach out to friends or family you haven't spoken to in a while.
  </p>
</Profile>
  )
}

export default ProfileCompoents
