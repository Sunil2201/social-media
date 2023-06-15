import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Sidebar from '../../components/Sidebar'
import "./Home.css"

function Home() {

  const {authState} = useContext(AuthContext)

  console.log(authState?.user, authState?.token)

  return (
    <div className='homePageContainer'>
      <Sidebar />
      This is the home page
    </div>
  )
}

export default Home