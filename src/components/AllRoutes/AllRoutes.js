import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation, Navigate, useNavigate } from 'react-router-dom';
import AskQuestion from '../../pages/AskQuestion/AskQuestion';
import Auth from '../../pages/Auth/Auth';
import Home from '../../pages/Home/Home';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import QuestionDetails from "../../pages/QuestionDetails/QuestionDetails"
import TagPage from '../../pages/TagPage/TagPage';
import UserPage from '../../pages/UserPage/UserPage';
const AllRoutes = ({setBgColor,user,setUser}) => {
  const [questionList,setQuestionList] = useState([]);


const [questionInfo,setQuestionInfo] = useState({
_id:2,   //consstant
upVotes:0, 
downVotes:0,
noOfAnswers:0,
questionTitle:"",
questionBody:"",
questionTags:[],
userPosted:user?.data?.name, //constant
askedOn:"",
answers:[]
});

let navigate = useNavigate();

function questionHandler(event){
       
  setQuestionInfo(prev => {
    let newVal = {...prev,[event.target.name]:event.target.value}
    return newVal;
  })

}


useEffect(() => {

  async function fetchData(){
    let res = await axios.get("https://stackoverflow-server-16ku.onrender.com/getAllQuestions");
    if(res.status==200){
 setQuestionList(res.data.data)
    }
    else{

    }
  }
fetchData()      
}, [])


function getCurrentDateAndTime(){
  let dateString = new Date(Date.now());
  let currentDate = dateString.toLocaleString('default', { month: 'short',day:"numeric",year:"numeric" });
  let [currentTime, currentTimeOfDay] = dateString.toLocaleTimeString().split(" ");
  currentTime = currentTime.substring(0, currentTime.length - 3)
  let currentDateAndTime = currentDate + " at " + currentTime + currentTimeOfDay;
   return currentDateAndTime
}


  return (
    <Routes>
      <Route exact path="/" element={<Home setBgColor={setBgColor} user={user}  questionList={questionList} />} />
      <Route exact path="/Auth" element={<Auth setBgColor={setBgColor} user={user} getCurrentDateAndTime={getCurrentDateAndTime} />} />
      <Route exact path="/questions" element={<Home setBgColor={setBgColor}  questionList={questionList} />} />
      <Route exact path="/questions/ask" element={<AskQuestion getCurrentDateAndTime={getCurrentDateAndTime} user={user} setBgColor={setBgColor} questionInfo={questionInfo} questionHandler={questionHandler} setQuestionInfo={setQuestionInfo} />} />
      <Route exact path="/questions/:id" element={<QuestionDetails user={user} setBgColor={setBgColor} questionList={questionList} getCurrentDateAndTime={getCurrentDateAndTime} />}/>
      <Route exact path="/tags" element={<TagPage setBgColor={setBgColor}   />} />
      <Route exact path="/users" element={<UserPage setBgColor={setBgColor}   />} />
      <Route exact path="/users/:userId/:name" element={<ProfilePage setBgColor={setBgColor} user={user} setUser={setUser}  />} />

    </Routes>
  );
};

export default AllRoutes;
