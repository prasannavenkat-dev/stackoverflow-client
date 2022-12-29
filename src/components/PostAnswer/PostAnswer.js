import React, { useEffect, useState } from 'react'
import "./PostAnswer.css"
import voteup from "../../assets/voteup.svg"
import votedown from "../../assets/votedown.svg"
import AnswerCard from '../AnswerCard/AnswerCard'
import axios from "axios"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
const PostAnswer = ({ user, questionList, getCurrentDateAndTime }) => {

    const [selectedQuestion, setSelectedQuestion] = useState();
    const [answerBody, setAnswerBody] = useState("");
    const [isVoted,setIsVoted] = useState({upVoted:false,downVoted:false})
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        //  setSelectedQuestion(()=> {
        //     let question = questionList.filter( ({_id}) => {
        //        return _id ==id
        //     })[0]

        //     return question
        //  })

        async function getQuestion(id) {
            let { data } = await axios.post("https://stackoverflow-server-16ku.onrender.com/getQuestion", { _id: id })
            let question = data.data
            setIsVoted(()=>{
             return {
       upVoted:question.upVotes.includes(user?.data?.userId),
       downVoted:question.downVotes.includes(user?.data?.userId)
             }   
                
            }
                );

            setSelectedQuestion({ ...question })
            
        }

        getQuestion(id)

    }, [])


    async function submitAnswer() {
        if (!user) {
            alert("Log In to Post Your Answers")
            navigate("/Auth")
            return;
        }
        if (answerBody == "") {
            alert("Answer Is Required!")
            return;
        }
        let answeredOn = getCurrentDateAndTime();
        let answers = [...selectedQuestion.answers];
        let answeredBy = user?.data?.name;

        answers.push({ answeredOn, answeredBy, answerBody })

        let { data: { message } } = await axios.post("https://stackoverflow-server-16ku.onrender.com/postAnswer", { ...selectedQuestion, answers })
        setAnswerBody("");
        alert(message)


        // setSelectedQuestion((prev)=>{
        //     return {...prev,answers:[...prev.answers,...answers]}
        // })

    }

    function answerBodyHandler(event) {
        setAnswerBody(event.target.value)
    }


    async function updateVote(type) {

    
           
        if(!user){
            alert("Login to Vote!");
            return;
        }

        if(type=="upVote" && isVoted.upVoted || type=="downVote" && isVoted.downVoted){
            alert('Already Voted');
            return
        }


        let data = {};
        if (type == "upVote") {
            data = { ...selectedQuestion, upVote: true, userId: user?.data?.userId }
        }
        else {
            if ((selectedQuestion.upVotes.length - selectedQuestion.downVotes.length) == 0) {
                return;
            }
            data = { ...selectedQuestion, downVotes: true, userId: user?.data?.userId }
        }
   

        let res = await axios.post("https://stackoverflow-server-16ku.onrender.com/updateVote",data)

        if (res.status == 200) {
            alert("Voted Success")
            setSelectedQuestion(res.data.data)
            setIsVoted(()=>{
                return {
          upVoted:res.data.data.upVotes.includes(user?.data?.userId),
          downVoted:res.data.data.downVotes.includes(user?.data?.userId)
                }   
                   
               }
                   );


        }
        else {
            alert("Voted Failure")
        }
    }



    return (
        <>
            {
                selectedQuestion ?
                    <div className='post-answer-container'>
                        <div className='que-title'>
                            <h1>
                                {selectedQuestion.questionTitle}
                            </h1>
                        </div>

                        <div className='time-block'>
                            <span>
                                asked <span style={{ color: "#232629" }}>{selectedQuestion.askedOn}</span>
                            </span>
                        </div>


                        <div className='question-body-container'>
                            <div className='vote-container'>
                                <button className='vote-btn'  onClick={() => updateVote("upVote")}>
                                    <img className='vote-icon' src={voteup} alt="upward icon" style={{filter: isVoted.upVoted && "invert(55%) sepia(99%) saturate(1709%) hue-rotate(347deg) brightness(102%) contrast(91%)"}} />
                                </button>
                                <div className='vote-count'>
                                    {selectedQuestion.upVotes.length - selectedQuestion.downVotes.length}
                                </div>
                                <button className='vote-btn'  onClick={() => updateVote("downVote")}>
                                    <img className='vote-icon' style={{filter: isVoted.downVoted && "invert(55%) sepia(99%) saturate(1709%) hue-rotate(347deg) brightness(102%) contrast(91%)"}}  src={votedown} alt="downward icon" />
                                </button>
                            </div>


                            <div className='question-body-layout' style={{ width: "100%" }}>
                                <div className='question-body-post-answer' >
                                    {selectedQuestion.questionBody}
                                </div>
                                <div className="tag-container">

                                    {
                                        selectedQuestion.questionTags?.map(tag => <span className="tag">{tag}</span>)
                                    }

                                </div>
                                <div className='utility'>

                                    <button className='share-btn'>
                                        Share
                                    </button>
                                    <div className="author-container">
                                        <button className="link-button">
                                            <span className="link-text" >
                                                {selectedQuestion.userPosted}
                                            </span>
                                        </button>
                                        <span> asked</span>
                                        <span>{selectedQuestion.askedOn}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='answer-count-container'>
                            <h2 className='answer-count'>
                                {selectedQuestion.answers.length} {selectedQuestion.length > 1 ? "Answers" : "Answer"}
                            </h2>
                        </div>

                        <div className='answer-container'>
                            {
                                selectedQuestion.answers?.map(answer => <AnswerCard answer={answer} />)
                            }

                        </div>

                        <div className='your-answer-container'>
                            <div className='your-answer-header'>
                                <h2>Your Answer</h2>
                            </div>
                            <textarea style={{}} className="text-area-container w-100" name="questionBody" type="textarea" spellCheck={false} value={answerBody} onChange={answerBodyHandler} />

                            {/* 
                
                <div className="text-area-container" contentEditable="true"
                    suppressContentEditableWarning={true}>
                    <pre style={{ minHeight: '17px' }}>
                        <code></code>
                    </pre>
                </div> */}
                        </div>

                        <div className='post-answer' >
                            <button className="btn" style={{ marginRight: '8px' }} onClick={submitAnswer}>
                                Post your Answer
                            </button>
                        </div>

                        <div className='ask-your-own-questions'>
                            <div className='ask-own-question'>
                                Browse other questions tagged {selectedQuestion.questionTags.map(tag => <span className='tag'>{tag}</span>)} or <span className='link-text' onClick={() => navigate("/questions/ask")} >ask your own question</span>.
                            </div>
                        </div>
                    </div> :
                    <div className='default'>
                    <CircularProgress sx={{color:"#0000"}} />
                    </div>
            }
        </>
    )
}

export default PostAnswer;