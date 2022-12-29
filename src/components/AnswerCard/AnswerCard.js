import React from 'react'
import { Link } from 'react-router-dom';

const AnswerCard = ({answer}) => {


    const {answerBody,answeredBy,answeredOn,userId} = answer;

  return (
  
    <div className='answer-body-layout'>
    <div className='answer-body'>
    {answerBody}
    </div>
    {/* <div className="tag-container">
        <span className="tag">data-structures</span>
        <span className="tag">c#</span>
    </div> */}
    <div className='utility'>

        <button className='share-btn'>
            Share
        </button>
        <div className="author-container">
        <Link style={{textDecoration:"none"}} to={`/users/${userId}/${answeredBy?.split(" ").join("-")}`}>

            <button className="link-button">
                <span className="link-text" >
                    {answeredBy}
                </span>
            </button>
            </Link>
            {/* <span className="score">1222</span> */}
            <span>  answered</span>
            <span>{answeredOn}</span>
        </div>
    </div>

</div>
  )
}

export default AnswerCard