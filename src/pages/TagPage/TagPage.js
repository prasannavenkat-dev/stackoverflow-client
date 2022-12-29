import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagContent from '../../components/TagContent/TagContent'
import "./TagPage.css"
const TagPage = () => {
  return (
    <div className="home-container">

    <div className="left-sidebar-container">
      <LeftSideBar />
    </div>
    <div className="main-container">
      <TagContent />
    </div>

  </div>
  )
}

export default TagPage