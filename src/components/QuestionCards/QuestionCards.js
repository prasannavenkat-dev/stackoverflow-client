import React from 'react';
import './QuestionCards.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const QuestionCards = ({ question }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const { _id, upVotes, downVotes, noOfAnswers, questionTitle, questionBody, questionTags, userPosted, askedOn, answers,userId } = question;
  console.log(userId)

  return (
    <div className="question-container">
      <div className="question-card">
        <div className="counts">
          <span> {upVotes.length - +downVotes.length} {(upVotes.length - downVotes.length) > 1 ? "votes" : "vote"}</span>
          <span> {answers.length} {answers.length > 1 ? "answers" : "answer"} </span>
          {/* <span> 10 views</span> */}
        </div>
        <div className="question-content">
          <h3 className="question" onClick={() => navigate(`/questions/${_id}`)}>
            {questionTitle}
          </h3>

          {
            location.pathname === "/questions" && <div className='question-body'>
              {questionBody.length > 200 ? questionBody.slice(0, 201) + " ..." : questionBody}
            </div>
          }


          <div className="tag-author-container">

            <div className="tag-container">
              {
                questionTags?.map((tag, id) => <span key={`${id}_tag`} className="tag">{tag}</span>)
              }
            </div>

            <div className="author-container">
            <Link style={{textDecoration:"none"}} to={`/users/${userId}/${userPosted?.split(" ").join("-")}`}>
              <button className="link-button">
              
                <span className="link-text">
                  {userPosted}
                </span>
              </button>
</Link>
              <span>  asked</span>
              <span>{askedOn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCards;
