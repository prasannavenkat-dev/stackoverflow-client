import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import UserPageContent from '../../components/UserPageContent/UserPageContent'
import "./UserPage.css"

const UserPage = () => {
  return (
    <div className="home-container">

    <div className="left-sidebar-container">
      <LeftSideBar />
    </div>
    <div className="main-container">
      <UserPageContent />
    </div>

  </div>
  )
}

export default UserPage