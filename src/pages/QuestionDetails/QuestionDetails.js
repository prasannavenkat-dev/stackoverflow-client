import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import PostAnswer from '../../components/PostAnswer/PostAnswer'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import "./QuestionDetails.css"
const QuestionDetails = ({ user, questionList, getCurrentDateAndTime }) => {

  let navigate = useNavigate();
  useEffect(() => {

  }, [])

  return (

    <div className="home-container">
      <div className="left-sidebar-container">
        <LeftSideBar />
      </div>
      <div className="main-container">

        <PostAnswer user={user} questionList={questionList} getCurrentDateAndTime={getCurrentDateAndTime} />



        <RightSideBar />

      </div>
    </div>


  )
}

export default QuestionDetails