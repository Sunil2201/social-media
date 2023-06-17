import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Home.css"
import ExploreUsers from '../../components/Explore Users/ExploreUsers'

function Home() {

  const {authState} = useContext(AuthContext)

  console.log(authState?.user, authState?.token)

  return (
    <div className='homePageContainer'>
      <Sidebar />
      <section className='homeSection'>
        <h2>Home</h2>
        <div className='newPost'>
          User avatar
          <form>
            <div role='textbox' className='tweet-input' contentEditable="true" placeholder='What is happenining?!' />
          </form>
        </div>
      </section>
      <ExploreUsers />
    </div>
  )
}

export default Home