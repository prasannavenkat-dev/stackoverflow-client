import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import ProfilePageContent from '../../components/ProfilePageContent/ProfilePageContent'
import UserPageContent from '../../components/UserPageContent/UserPageContent'
import  "./ProfilePage.css"
const ProfilePage = ({user,setUser}) => {
  return (
    <div className="home-container">

    <div className="left-sidebar-container">
      <LeftSideBar />
    </div>
    <div className="main-container">
     <ProfilePageContent user={user} setUser={setUser} />
    </div>

  </div>
  )
}

export default ProfilePage