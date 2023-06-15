import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Home() {

  const {authState} = useContext(AuthContext)

  console.log(authState?.user, authState?.token)

  return (
    <div>This is the home page</div>
  )
}

export default Home