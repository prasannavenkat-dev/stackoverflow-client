import React, { useEffect, useRef, useState } from 'react';
import './AskQuestion.css';
import askque from '../../assets/askque.svg';
import { useNavigate } from 'react-router-dom';
import AskQueTitle from '../../components/AskQueTitle/AskQueTitle';
import AskQuesBody from '../../components/AskQueBody/AskQuesBody';
import AskQueTags from '../../components/AskQueTags/AskQueTags';
import { useDispatch } from 'react-redux';
import {postQuestion} from "../../actions/postQuestion"

const AskQuestion = ({ setBgColor, questionInfo, questionHandler, setQuestionInfo,user,getCurrentDateAndTime }) => {


  
  const [queField, setQueField] = useState([{ field: "questionTitle", isDisplayNone: true }, { field: "questionBody", isDisplayNone: true }, { field: "questionTags", isDisplayNone: true }]);
  const [tagString,setTagString]=useState("")
  
  let navigate  = useNavigate();
  useEffect(() => {
     let user =  JSON.parse(window.sessionStorage.getItem("user"))
   
    if (!user) {
      alert("Log In to Ask Your Questions")
      navigate("/Auth")
    }


    let askedBy = user?.data?.name;
    setQuestionInfo(prev=>{
      return{...prev,askedBy}
    })
    setBgColor("hsl(180deg 8% 97%)")

  }, [])

  const inputElement = useRef();


  const dispatch = useDispatch();



  function displayHandler(event) {

    setQueField((prev) => {
      let newVal = prev.map(item => {
        if ((item.field) == event.target.name) {
          return { ...item, isDisplayNone: false }
        }
        else {
          return { ...item, isDisplayNone: true }
        }
      })
      return newVal
    })

  }




  function questionSubmit() {

    
    let askedOn = getCurrentDateAndTime();
    let _id = Math.floor(Math.random() * 999999);

    let {questionTitle,questionBody,questionTags } = questionInfo;
    let userPosted = user?.data?.name 
    let userId = user?.data?.userId

    if(!questionTitle || !questionBody || questionTags.length==0 ){
        alert("Missing Input Fields")
        return;
    }
    
    setQuestionInfo(prev => {
      return { ...prev, askedOn,_id,userPosted,userId }
    })

    dispatch(postQuestion({...questionInfo,askedOn,_id,userPosted,userId}));

    clearFields();
  }

  function clearFields() {

    setQueField([{ field: "questionTitle", isDisplayNone: true }, { field: "questionBody", isDisplayNone: true }, { field: "questionTags", isDisplayNone: true }])
    setQuestionInfo(prev => {
      return { ...prev, questionTitle: "", questionBody: "", questionTags: "" }
    })
    setTagString("")
    inputElement.current.focus();
  }

  return (
<>

{
  user && (<>

<div className="ask-question-container">
      <div className="ask-que-header-container" style={{ boxSizing: 'content-box' }}>
        <h1 id="ask-que-header">Ask a public question</h1>
      </div>

      <div className="good-question-container">
        <div>
          <h2>Writing a good question</h2>
          <p style={{ margin: 0 }}>
            You're ready to ask a programming-related question and this form will help guide you through the process.
          </p>
          <p style={{ margin: '0 0 15px 0' }}>
            Looking to ask a non-programming question? See the topics here to find a relevant site.
          </p>
          <h5 style={{ margin: '0 0 8px 0', fontSize: '13px' }}>Steps</h5>
          <ul>
            <li >Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>

            <li>Describe what you tried and what you expected to happen.</li>

            <li>Add “tags” which help surface your question to members of the community.</li>

            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
      </div>

      <AskQueTitle inputElement={inputElement} displayHandler={displayHandler} queField={queField} questionHandler={questionHandler} questionInfo={questionInfo} />
      <AskQuesBody displayHandler={displayHandler} queField={queField} questionHandler={questionHandler} questionInfo={questionInfo} />
      <AskQueTags tagString={tagString} setTagString={setTagString} displayHandler={displayHandler} queField={queField} questionInfo={questionInfo} setQuestionInfo={setQuestionInfo} />
      <div className="submit-discard" style={{ paddingBottom: '48px' }}>
        <button className="btn" style={{ marginRight: '8px' }} onClick={questionSubmit}>
          Post your Question
        </button>
        <button className="discard-btn" style={{ marginLeft: '8px' }} onClick={clearFields}>
          Discard draft
        </button>
      </div>
    </div>
  </>)  
}
</>

    
  );
};

export default AskQuestion;
